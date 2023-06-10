
const result = document.getElementById("result")
const form = document.querySelector("form");
let meals = [];

console.log(result);
async function fetchMeals(){

 await  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato").
    then((res) => res.json())
    .then((data) => (meals = data.meals));
     console.log(meals);
}

function mealsDisplay(){
   meals.length = 12;
   result.innerHTML = meals.map((meal) =>
   `li class="card">
   <h2>${meal.strMeal}</h2>
   `);
}

form.addEventListener("submit", (e) => {
e.preventDefault();
   fetchMeals().then(() => mealsDisplay());                                                           
});