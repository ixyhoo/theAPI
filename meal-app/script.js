

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato").
then((res) =>

 res.json()).then((data) => console.log(data.meals[0]))