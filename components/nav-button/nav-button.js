export function createButton(onClick) {
  const newButton = document.createElement('button');
  // Hier wird geprüft, ob der Name der Callback-Funktion 'prevNavigation' ist:
  if (onClick.name === 'prevNavigation') {
    newButton.classList.add('button', 'button--prev');
    newButton.setAttribute('data-js', 'button-prev');
    newButton.textContent = 'previous';
  } else {
    newButton.classList.add('button', 'button--next');
    newButton.setAttribute('data-js', 'button-next');
    newButton.textContent = 'next';
  }
  newButton.addEventListener('click', onClick);

  return newButton;
}
