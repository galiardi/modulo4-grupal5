function getCategoryCard({ strCategory, strCategoryThumb }) {
  return `
  <li class="dropdown-item w-100" onClick="selectCategory('${strCategory}')">
    <div class="card mb-1">
      <div class="row g-0">
        <div class="col-4">
          <img src="${strCategoryThumb}" class="img-fluid rounded-start dropdown-img" alt="${strCategory}">
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">${strCategory}</h5>
          </div>
        </div>
      </div>
    </div>
  </li>`;
}

export { getCategoryCard };
