export function createButton(onClick, buttonAttribute, buttonContent) {
  const button = document.createElement('button');
  button.classList.add('button', buttonAttribute);
  button.setAttribute('data-js', buttonAttribute);
  button.textContent = buttonContent;

  button.addEventListener('click', onClick);

  return button;
}
