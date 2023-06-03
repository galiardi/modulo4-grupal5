import { getCategoryCard } from './getCategoryCard.js';

async function getOptions(url) {
  try {
    const response = await fetch(url);
    const { categories } = await response.json();
    console.log(categories);
    const options = categories.map((category) => getCategoryCard(category));
    return options;
  } catch (error) {
    console.log(error);
  }
}

export { getOptions };
