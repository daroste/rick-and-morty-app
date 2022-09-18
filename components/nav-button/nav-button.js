export function createButton(onClick) {
  const prevButton = document.createElement('button');
  prevButton.classList.add('button', 'button--prev');
  prevButton.setAttribute('data-js', 'button-prev');
  prevButton.textContent = 'previous';

  prevButton.addEventListener('click', onClick);

  return prevButton;
}
