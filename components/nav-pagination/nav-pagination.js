export function createPagination(paginationText) {
  const paginationElement = document.createElement('span');
  paginationElement.classList.add('navigation__pagination');
  paginationElement.setAttribute('data-js', 'pagination');
  paginationElement.textContent = paginationText;
  return paginationElement;
}
