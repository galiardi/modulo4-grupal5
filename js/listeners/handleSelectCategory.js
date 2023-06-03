import { getMealCard } from '../ui/getMealCard.js';

const mealDiv = document.getElementById('resultado');

async function handleSelectCategory(category) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const { meals } = await response.json();
    console.log(meals);
    const mealCards = meals.map((meal) => getMealCard(meal));
    mealDiv.innerHTML = mealCards.join('');
  } catch (error) {}
}

export { handleSelectCategory };
