$(document).ready(function() {
  //all js goes in here
  console.log("we loaded");


  $("#title").mouseover(function() {
    // when you mouseover the title, the font of the title grows bigger
    $("#title").css("font-size", "60px");
  });

  $("#title").click(function() {

    $("#title").html("How To Make a damn good Cuban Medianoche Sandwich.");
  });

  $("#button1").click(function() {
    // when you click the show button, show the hidden ingredient list
    $("#ingredientList").show();
  });

  $("#button2").click(function() {
    // when you click the hide button, hide the ingredient list
    $("#ingredientList").hide();
  });

  $("#button3").click(function() {
    // when you click the hide button, show step 1
    $("#step1description").show();
  });

  $("#button4").click(function() {
    // when you click the hide button, hide step 1
    $("#step1description").hide();
  });

  $("#button5").click(function() {
    // when you click the hide button, show step 1
    $("#step2description").show();
  });

  $("#button6").click(function() {
    // when you click the hide button, hide step 1
    $("#step2description").hide();
  });

  $("#button7").click(function() {
    // when you click the hide button, show step 1
    $("#step3description").show();
  });

  $("#button8").click(function() {
    // when you click the hide button, hide step 1
    $("#step3description").hide();
  });

  $("#button9").click(function() {
    // when you click the hide button, show step 1
    $("#step4description").show();
  });

  $("#button10").click(function() {
    // when you click the hide button, hide step 1
    $("#step4description").hide();
  });

  $("#button11").click(function() {
    // when you click the hide button, show step 1
    $("#step5description").show();
  });

  $("#button12").click(function() {
    // when you click the hide button, hide step 1
    $("#step5description").hide();
  });

  $("p")
    .mouseover(function() {
      // when your mouse is over a paragraph, the font size will become 21px
      $("p")
        .css("font-size", "35px");
    });

  $("p")
    .mouseleave(function() {
      // when your mouse leaves a paragraph the font-size will get smaller
      // and the background-color of the paragraph will become yellow
      $("p")
        .css("background-color", "#ffff0d");
      $("p")
        .css("font-size", "16px");
    });
});