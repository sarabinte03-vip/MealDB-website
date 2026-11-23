function searchMeal() {

    var name = document.getElementById("mealName").value;

    var web = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

    fetch(web)
    .then(response => response.json())
    .then(data => moreSteps(data));

}
function moreSteps(data) {

    var mealContainer = document.getElementById("showMeals");

    mealContainer.innerHTML = "";

    for (var a = 1; a <= data.meals.length; a++) {

        var newDiv = document.createElement("div");

        newDiv.classList.add("format");
        newDiv.innerHTML =
        "<div><b>Meal Title: </b>" + data.meals[a-1].strMeal + "</div>" +
        "<div><img src='" + data.meals[a-1].strMealThumb + "'></div>";
        
        mealContainer.appendChild(newDiv);

    }

}