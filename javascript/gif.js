// array of starting search terms
var catArray = ["Happy Cat", "Playful Cat", "Annoyed Cat", "Fluffy Cat", "Yelling Cat"];

// generates buttons for each search term in the array
function catButtons() {
    catArray.forEach(function (searchTerm) {
       var newButton = $("<button>" + searchTerm + "</button>");
        newButton.attr("data-cat", searchTerm);
        newButton.addClass("search-button btn btn-info ml-1");
        $("#buttons").append(newButton);
    })
}
// initial call to create buttons
catButtons();

// make ajax call when search buttons are clicked.
$(document).on("click", ".search-button", function () {
    $("#gifs").empty();
    // get search term from button data attribute
    var searchTerm = $(this).attr("data-cat");

    var queryURL = "http://api.giphy.com/v1/gifs/search"

    $.ajax({
        url: queryURL,
        data: {
            q: searchTerm,
            api_key: "dc6zaTOxFJmzC",
            limit: 10
        },
        method: "GET"
    }).then(function (response) {
        // loop over api result and generate img tags for each one
        response.data.forEach(function (item) {
            var animatedGif = item.images.original.url;
            var stillGif = item.images.original_still.url;
            var newGif = $("<img>");

            // store the still and animated urls on the tag with data attributes
            newGif.attr({
                "src": stillGif,
                "data-animated-gif": animatedGif,
                "data-still-gif": stillGif,
                "class": "m-1 w-25"
            });

            $("#gifs").append(newGif);
        });
    });
});

// animate or stop animation when image is clicked
$(document).on("click", "img", function () {
    // if image is not animated then animate it, stop previously animated gif, mark clicked image with animated class.
    if ($(this).attr("src") === $(this).attr("data-still-gif")) {
        $(this).attr("src", $(this).attr("data-animated-gif"));
        $(".animated").attr("src", $(".animated").attr("data-still-gif"));
        $(".animated").removeClass("animated");
        $(this).addClass("animated");
    } else {
        $(this).attr("src", $(this).attr("data-still-gif"));
        $(this).removeClass("animated");
    }
})

// add user-defined search term and regenerate buttons
$("#add").on("click", function () {
    var newItem = $("#textBox").val();
    $("#textBox").val("");
    catArray.push(newItem);

    catButtons();
})