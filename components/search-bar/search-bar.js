export function createSearchBar(onSubmit) {
  const searchBar = document.createElement('form');
  searchBar.classList.add('search-bar');
  searchBar.setAttribute('data-js', 'search-bar');
  searchBar.innerHTML = `<input
  name="query"
  class="search-bar__input"
  type="text"
  data-js="query-input"
  placeholder="search characters"
  aria-label="character name"
/>
<button
  type="submit"
  class="search-bar__button"
  aria-label="search for character"
>
  <img
    class="search-bar__icon"
    src="assets/magnifying-glass.png"
    alt=""
  />
</button>`;

  searchBar.addEventListener('submit', onSubmit);

  return searchBar;
}
