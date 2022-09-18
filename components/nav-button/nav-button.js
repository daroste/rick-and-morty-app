import {page} from '../../index.js';

export function createButton() {
  const prevButton = document.createElement('button');
  prevButton.classList.add('button', 'button--prev');
  prevButton.setAttribute('data-js', 'button-prev');
  prevButton.textContent = 'previous';

  prevButton.addEventListener('click', onClick => {
    if (page > 1) {
      console.log('prev clicked');
      page -= 1;
      fetchCharacters();
    }
  });

  return prevButton;
}
