function getMealCard({ idMeal, strMeal, strMealThumb }) {
  return `
    <div class="card my-3" style="width: 18rem;">
      <img src="${strMealThumb}" class="card-img-top" alt="${strMeal}">
      <div class="card-body">
        <h5 class="card-title">${strMeal}</h5>
        <p class="card-text"></p>
        <button onclick="showRecipe(${idMeal})" class="btn btn-primary">show recipe</button>
      </div>
    </div>
  `;
}

export { getMealCard };
