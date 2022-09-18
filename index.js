import {createCharacterCard} from './components/card/card.js';
import {createButton} from './components/nav-button/nav-button.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
// const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 4;
let searchQuery = '';

// create navigation
const prevButton = createButton();
navigation.append(prevButton);

// create fetchCharacters function

const fetchCharacters = async () => {
  cardContainer.innerHTML = '';
  try {
    const result = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`,
    );
    const data = await result.json();
    data.results.forEach(element => {
      //  console.log(data.results);
      cardContainer.append(createCharacterCard(element));
    });
    maxPage = data.info.pages;
    // pagination.textContent = `${page} / ${maxPage}`;
  } catch (error) {
    console.error(error);
  }
};

/* nextButton.addEventListener('click', () => {
  if (page < maxPage) {
    page += 1;
    fetchCharacters();
  }
}); */

/* prevButton.addEventListener('click', () => {
  if (page > 1) {
    page -= 1;
    fetchCharacters();
  }
}); */

searchBar.addEventListener('submit', event => {
  event.preventDefault();
  page = 1;
  const queryInput = document.querySelector('[data-js="query-input"]');
  searchQuery = queryInput.value.toLowerCase();
  fetchCharacters();
});
fetchCharacters();

createCharacterCard(CharacterData);

export {page};
