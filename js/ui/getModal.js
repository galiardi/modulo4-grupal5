function getModal(data) {
  const {
    idMeal,
    strMeal,
    strDrinkAlternate,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
    strSource,
    strImageSource,
    strCreativeCommonsConfirmed,
    dateModified,
  } = data;

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  ];

  const mesures = [
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
  ];

  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient !== ''
  );

  const mesuredIngredients = filteredIngredients.map((ingredient, i) => {
    return `<li>-${mesures[i]} ${ingredient}</li>`;
  });

  const videoId = strYoutube.split('watch?v=')[1];
  console.log(videoId);

  return `
    <div
      class="modal fade"
      id="modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-lg modal-xl">
        <div class="modal-content p-4">
          <div class="modal-header">
            <h1
              class="modal-title fs-3 font-bold"
              id="staticBackdropLabel"
            >${strMeal}</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="iframe-container">
              <iframe
                class="responsive-iframe"
                src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1"
                allowfullscreen
              ></iframe>
            </div>  
            <p class="modal-text pt-4">Ingredients:</p>
            <ul class="modal-text">${mesuredIngredients.join('')}</ul>
            <p class="modal-text">Method:</p>
            <p class="modal-text method">${strInstructions}</p>      
          </div>      
          <div class="modal-footer flex justify-content-between"></div>
        </div>
      </div>
    </div>
  `;
}

export { getModal };
