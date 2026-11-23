function searchMeal() {

    var name = document.getElementById("mealName").value;

    var web = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

    fetch(web)
    .then(response => response.json())
    .then(data => moreSteps(data));

}