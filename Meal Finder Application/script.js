function searchMeal() {
  const input = document.getElementById("mealInput");
  const searchTerm = input.value.toLowerCase();
  const mealList = document.getElementById("mealList");

  async function fetchMeals(searchTerm) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  // Extract meals from the response
  const meals = data.meals;

  return meals;
    }
    
  // Clear previous results
  mealList.innerHTML = "";

  // Fetch meals from the API
  fetchMeals(searchTerm)
    .then((meals) => {
      // Display matched meals
      meals.forEach((meal) => {
        const mealItem = document.createElement("li");
        mealItem.classList.add("mealItem");
        mealItem.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div>${meal.strMeal}</div>
          `;
        mealList.appendChild(mealItem);
      });
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });

  // Clear input value
  input.value = "";
}
