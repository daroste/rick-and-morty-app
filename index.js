import {createCharacterCard} from './components/card/card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

// create fetchCharacters function

const fetchCharacters = async () => {
  cardContainer.innerHTML = '';
  try {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const data = await result.json();
    data.results.forEach(element => {
      console.log(data.results);
      cardContainer.append(createCharacterCard(element));
    });
  } catch (error) {
    console.error(error);
  }
};

fetchCharacters();
/* function fetchCharacters() {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      data.results.forEach(element => {
        console.log(data.results);
        cardContainer.append(createCharacterCard(element));
      });
    });
} */

/* cardContainer.append(createCharacterCard()); */

createCharacterCard(CharacterData);
