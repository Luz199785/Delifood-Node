
$(document).ready(function(){
    $("#search-button").click(function(){
        searchMeals();
    })
})

function searchMeals(){
    $("#show-meals").html("");
    let query = $("#category option:selected").text();
    
    $.ajax({
        url: "https://www.themealdb.com/api/json/v1/1/filter.php?c="+query,
        type: "get",
        dataType: "json",

        success: function(data){
            if(data.meals.length > 0){
                let listMeals = data.meals;

                $.each(listMeals,function (i, meal) {
                    $("#show-meals").append(
                        `<div class="col-md-4 mb-3">
                            <div class="card">
                                <img src="${meal.strMealThumb}" class="card-img-top" alt="${data.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${meal.strMeal}</h5>
                                </div>
                            </div>
                        </div>`
                    )
                })


            } else {
                $("#show-meals").html(
                    '<h1 class="display-1">Error: No se encontraron personajes.</h1>'
                );
            }
        },
        error: function(){
            $("#show-meals").html(
                `<h1 class: "display-1">El servicio API no esta disponible.</h1>`
            );
        }
    })
}