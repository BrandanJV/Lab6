$(document).ready(function() {

// Start your code from here
    let animals = [
        "dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
        "bird", "ferret", "turtle", "sugar glider", "chinchilla",
        "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
        "capybara", "teacup pig", "serval", "salamander", "frog"
    ];


    function populateButtons(array){
        $("#animal-buttons").empty();

        array.forEach(element => {
            var a = $("<button>");
            a.text(element)
            a.addClass("animal-button")
            a.attr("data-type",element)
            $("#animal-buttons").append(a);
        });
    }   

    // La logica del click de cada boton para hacer la llamda al API
    $("#animal-buttons").on("click", ".animal-button", function() {
        let APIKEY = "QbuE3T3unFQCHyPAVZ0Y7Ol0w3i3Wyct";
        $("#animals").empty();
        let limit = 10;
        let animal = $(this).text();
        let queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${animal}&limit=${limit}&offset=0&rating=g&lang=en`

        $.ajax({
            url:queryURL,
            method: "GET",
        }).then(function(res){
            res.data.forEach((element, index) => {
                console.log(index)
                console.log(element)
                // var a = $("<img>");
                // a.addClass("animal-image");
                // a.attr("src", element.images.original_still.url)
                // a.attr("data-static", element.images.original_still.url);
                // a.attr("data-dynamic", element.images.looping.url);
                // a.attr("data-state", false);
                var x = $("<div>");
                x.addClass("animal-div");

                $(".animal-div").append(`<h3>'${element.title}'</h3>`)  
                // $(".animal-div").append(a);                
                $(".animals-div").append(`<h4> PG: '${element.rating}'</h4>`);
                $(".animals-div").append(`<h4> By: '${element.username}'</h4>`);
                $("#animals").append(x);
                
            })
        })
    })


    // La lógica del click de cada imagen para "intercambiar las urls"
    $("#animals").on("click", ".animal-image", function(){
        alert("ok");
    })


    // La lógica del formulario para agregar mas botones a la lista
    $("#add-animal").on("click", function(e) {
        e.preventDefault();

    })


    populateButtons(animals);
});
