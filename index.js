import {createCharacterCard} from './components/card/card.js';
import {createButton} from './components/nav-button/nav-button.js';
import {createPagination} from './components/nav-pagination/nav-pagination.js';
import {createSearchBar} from './components/search-bar/search-bar.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

// create onClick function
const onClick = isPre => {
  if (isPre && page > 1) {
    page -= 1;
    fetchCharacters();
  } else if (!isPre && page < maxPage) {
    page += 1;
    fetchCharacters();
  }
};

// create prevButton
const prevButton = createButton(
  () => onClick(true),
  'button--prev',
  'previous',
);
navigation.append(prevButton);

// create pagination
const pagination = createPagination(`${page} / ${maxPage}`);
navigation.append(pagination);

// create fetchCharacters function
const fetchCharacters = async () => {
  cardContainer.innerHTML = '';
  try {
    const result = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`,
    );
    const data = await result.json();
    data.results.forEach(element => {
      cardContainer.append(createCharacterCard(element));
    });
    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
  } catch (error) {
    console.error(error);
    // Könnte so eine Fehlermeldung ausgegeben werden?:
    const errorMessage = document.createElement('li');
    errorMessage.textContent = `Your search for '${searchQuery}' did not return any results.`;
    cardContainer.append(errorMessage);
    searchQuery = '';
  }
};

// create nextButton
const nextButton = createButton(() => onClick(false), 'button--next', 'next');
navigation.append(nextButton);

// create onSubmit function
const onSubmit = event => {
  event.preventDefault();
  page = 1;
  searchQuery = event.target.elements.query.value.toLowerCase();
  fetchCharacters();
};

// create searchbar
const searchBar = createSearchBar(onSubmit);
searchBarContainer.append(searchBar);

fetchCharacters();

createCharacterCard(CharacterData);
