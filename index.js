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
    updatePage(); // Hier war mal: pagination.textContent = `${page} / ${maxPage}`;
  } catch (error) {
    console.error(error);
    // Könnte so eine Fehlermeldung ausgegeben werden?:
    const errorMessage = document.createElement('li');
    errorMessage.textContent = `Your search for '${searchQuery}' did not return any results.`;
    cardContainer.append(errorMessage);
    searchQuery = '';
  }
};

// CREATE NAVIGATION

function prevNavigation() {
  // Dies ist die Callback-Function für den prev-Button
  if (page > 1) {
    console.log('prev clicked');
    page -= 1;
    fetchCharacters();
  }
}

function nextNavigation() {
  // Dies ist die Callback-Function für den next-Button
  if (page < maxPage) {
    console.log('next clicked');
    page += 1;
    fetchCharacters();
  }
}

// Hier wird createButton aufgerufen und bekommt die passende Callback-Funktionm für den prev-Button mit.
navigation.append(createButton(prevNavigation));

// Hier wird mit createPagination das Feld für die Seitenzahl in die Navigation eingefügt.
navigation.append(createPagination());
const pagination = document.querySelector('[data-js="pagination"]'); // Diese Variable funktioniert nur, wenn sie hier unten erzeugt wird!
function updatePage() {
  pagination.textContent = `${page} / ${maxPage}`;
}

// Hier wird mit createButton und der passenden Callback-Function der next-Button erzeugt und in die Navigation eingefügt.
navigation.append(createButton(nextNavigation));

// --- END NAVIGATION

// CREATE SEARCH BAR

function onSubmit(event) {
  event.preventDefault();
  page = 1;
  searchQuery = event.target.elements.query.value.toLowerCase();
  fetchCharacters();
}

//const searchBarTest = createSearchBar(onSubmit);
searchBarContainer.append(createSearchBar(onSubmit));

// --- END SEARCH BAR

fetchCharacters();

createCharacterCard(CharacterData);
