$(document).ready(function() {
  //all js goes in here
  console.log("we loaded");


  $("#title").mouseover(function() {
    // when you mouseover the title, the font of the title grows bigger
    $("#title").css("font-size", "60px");
  });

  $("#title").click(function() {

    $("#title").html("My best vacation yet.");
  });

  $("#button1").click(function() {
    // when you click the show button, show the hidden ingredient list
    $("#FirstThingsWeDid").show();
  });

  $("#button2").click(function() {
    // when you click the hide button, hide the ingredient list
    $("#FirstThingsWeDid").hide();
  });

  $("h6")
    .mouseover(function() {
      // when your mouse is over a paragraph, the font size will become 21px
      $("h6")
        .css("font-size", "35px");
    });

  $("h6")
    .mouseleave(function() {
      // when your mouse leaves a paragraph the font-size will get smaller
      // and the background-color of the paragraph will become yellow
      $("h6")
        .css("background-color", "#ffff0d");
      $("h6")
        .css("font-size", "16px");
    });
});