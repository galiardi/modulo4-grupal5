import { showCategories } from './ui/showCategories.js';
import { handleSelectCategory } from './listeners/handleSelectCategory.js';
import { handleShowRecipe } from './listeners/handleShowRecipe.js';

// mostrar categorías
const categoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
showCategories(categoriesUrl);

// listeners
window.selectCategory = async (category) => {
  await handleSelectCategory(category);
};

window.showRecipe = async (id) => {
  await handleShowRecipe(id);
};
