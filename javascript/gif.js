var catArray = ["Happy Cat", "Playful Cat", "Annoyed Cat", "Fluffy Cat", "Yelling Cat"];

function catButtons() {
    $("#catGifs").empty();
    for (var i = 0; i < catArray.length; i++) {
        var newButton = $("<button>" + catArray[i] + "</button>");
        newButton.attr("data-cat", catArray[i]);
        newButton.addClass("button");

        $("#catGifs").append(newButton);
    }

}
catButtons();

$(document).on("click", ".button", function () {
    $("#gifs").empty();
    var searchTerm = $(this).attr("data-cat");

    var queryURL = "http://api.giphy.com/v1/gifs/search"

    $.ajax({
        url: queryURL,
        data:{
            q: searchTerm,
            api_key: "dc6zaTOxFJmzC",
            limit: 10
        },
        method: "GET"
    }).then(function (response) {
        response.data.forEach(function(item){
            var animatedGif = item.images.original.url;
            var stillGif = item.images.original_still.url;
            var newGif = $("<img>");
            
            newGif.attr({
                "src": stillGif,
                "data-animated-gif": animatedGif,
                "data-still-gif": stillGif
            });

            $("#gifs").append(newGif);
        });
    });
});

$(document).on("click", "img", function (){
    if( $(this).attr("src") === $(this).attr("data-still-gif")){
        $(this).attr("src", $(this).attr("data-animated-gif"));
    } else {
        $(this).attr("src", $(this).attr("data-still-gif"));
    }
})

$("#add").on("click", function (){
    var newItem = $("#textBox").val();
    $("#textBox").val("");
    catArray.push(newItem);

    catButtons();
})