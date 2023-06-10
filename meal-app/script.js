
const result = getElementById("result")
let meals = [];

console.log(result);
async function fetchMeals(){

 await   fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato").
    then((res) =>
    
     res.json()).then((data) => (meals = data.meals))
     console.log(meals);
}
fetchMeals();