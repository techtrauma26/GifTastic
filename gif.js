

var designers = ['Alexander Mcqueen', 'Chanel', 'Christian Dior', 'Gucci', 'Louis Vuitton', 'Marc Jacobs', 'Prada', 'Kate Spade', 'Tom Ford', 'Christian Louboutin', 'Yves Saint Laurent'];

function toggleFunction() {
  var q = $(this).attr("data-name");
  if ($('#' + q).css('display') == 'none') {
    $('#' + q).show();
  }
  else {
    $('#' + q).css('display', 'none');
    $('#' + q + "+").show();
  }
}
function toggleFunction1() {
  var q = $(this).attr("data-name");
  if ($('#' + q).css('display') == 'none') {
    $('#' + q).show();
  }
  else {
    $('#' + q.replace("+", "")).show();
    $('#' + q).css('display', 'none');

  }
}
function x2() {
  $("#imgPlaceHolder").empty();

  var q = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + q +
    "&api_key=3H0VkNxFn0gOOJhD2pVVGH8mJIQZYWtU&limit=10";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var results = response.data;
    for (var i = 0, j = results.length; i < j; i++) {
      if (i == 0 || i % 4 == 0) {
        var appendEl = $("<div class='row'>&nbsp;</div>").appendTo("#imgPlaceHolder");
      }
      var imgURL = results[i].images.fixed_height_still.url;//results[i]
      var imgURL1 = results[i].images.fixed_height.url;//results[i]
      var id = results[i].id;
      $("<div class='col-md-3'><img  class='imgClick' id='" + id + "' data-name='" + id + "' src='" + imgURL + "' style='display:show'><img class='imgClick1'  id='" + id + "+' data-name='" + id + "+' src='" + imgURL1 + "' style='display:none'><p>Rating: " + results[i].rating + "</p></div>")
        .appendTo(appendEl);
    }
  });
}

function createBtn() {

  $("#designerButton").empty();
  // Looping through the array 
  for (var i = 0; i < designers.length; i++) {
    var a = $("<button>");
    // Adding a class of
    a.addClass("dBtn");
    // Adding a data-attribute
    a.attr("data-name", designers[i]);
    // Providing the initial button text
    a.text(designers[i]);
    // Adding the button to the buttons-view div
    $("#designerButton").append(a);
  }
}

$("#addDesigner").on("click", function (event) {
  event.preventDefault();
  var q = $("#designerLabel").val().trim();
  designers.push(q);

  createBtn();

});



$(document).on("click", ".dBtn", x2);
$(document).on("click", ".imgClick", toggleFunction);
$(document).on("click", ".imgClick1", toggleFunction1);

createBtn();






















































