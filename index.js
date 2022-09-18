import {createCharacterCard} from './components/card/card.js';
import {createButton} from './components/nav-button/nav-button.js';
import {createPagination} from './components/nav-pagination/nav-pagination.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
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

// Hier wird mit createButton und der Callback-Function der next-Button erzeugt und in die Navigation eingefügt.
navigation.append(createButton(nextNavigation));

// --- END NAVIGATION

searchBar.addEventListener('submit', event => {
  event.preventDefault();
  page = 1;
  const queryInput = document.querySelector('[data-js="query-input"]');
  searchQuery = queryInput.value.toLowerCase();
  fetchCharacters();
});
fetchCharacters();

createCharacterCard(CharacterData);

export {page, fetchCharacters};
