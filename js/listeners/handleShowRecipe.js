import { getModal } from '../ui/getModal.js';

const modalDiv = document.getElementById('modalDiv');

async function handleShowRecipe(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await response.json();
    console.log(meals);
    const modal = getModal(meals[0]);
    modalDiv.innerHTML = modal;
    const bootstrapModal = new bootstrap.Modal('#modal'); // para manipular el modal de bootstrap con js
    bootstrapModal.show();
  } catch (error) {
    console.log(error);
  }
}

export { handleShowRecipe };
