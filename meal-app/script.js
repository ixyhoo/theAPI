
const result = document.getElementById("result")
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];


console.log(result);
async function fetchMeals(search){

 await  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search).
    then((res) => res.json())
    .then((data) => (meals = data.meals));
     console.log(meals);
}

function mealsDisplay(){
   if (meals === null) {
      result.innerHTML = "<h2>There are no meals</h2>";
   }  else {

      meals.length = 12;
      result.innerHTML = meals.map((meal) =>
      `<li class="card">
      <h2>${meal.strMeal}</h2>
      <p>${meal.strArea}</p>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
      <ul></ul>
      </li>
      `).join("");
   }                                                                                                                                                                                                                                                                                                                                                                                                                     
}

input.addEventListener("input", (e) => {
   e.preventDefault();
   fetchMeals(e.target.value);
   
});                                                                                                     

form.addEventListener("submit", (e) => {
e.preventDefault();
   mealsDisplay();                                                           
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               