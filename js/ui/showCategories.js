import { getOptions } from './getOptions.js';

const dropdownMenu = document.getElementById('dropdownMenu');

async function showCategories(url) {
  const options = await getOptions(url);
  dropdownMenu.innerHTML = options.join('');
}

export { showCategories };
