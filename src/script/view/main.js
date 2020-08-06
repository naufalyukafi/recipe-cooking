import "../../components/meal-list.js";
import "../../components/search-bar.js";
import "../../components/galeri-bar.js";
import "../../components/about-bar.js";
import "../../components/footer-bar.js";

import DataMeals from "../data/data-meals.js";
const main = () => {
  const searchElement = document.querySelector("search-bar");
  const mealListElement = document.querySelector("meal-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataMeals.searchMeals(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    mealListElement.meals = results;
  };

  const fallbackResult = (message) => {
    mealListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
