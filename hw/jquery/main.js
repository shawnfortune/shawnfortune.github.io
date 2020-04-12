$(document)
  .ready(function() {
    //all js goes in here
    console.log("we loaded");

    $("#button1").click(function() {
      // Code that runs when you click on the part of the page that has id="button1".
      $("#title")
        .addClass("big-text");
      console.log("this ran");
    });

    $("#button2").click(function() {
      // stuff we put here will happen when you click button2.
      // in this case we remove the class called big-text from
      // the part of the page that has id=title
      $("#title")
        .removeClass("big-text");
    });

    // $("p").mouseover(function() {
    //     // when your mouse is over a paragraph, the font size will become 21px
    //     $("p")
    //       .css("font-size", "21px");
    //   });

    // $("p").mouseleave(function() {
    //     // when your mouse leaves a paragraph the font-size will get smaller
    //     // and the background-color of the paragraph will become yellow
    //     $("p")
    //       .css("background-color", "yellow");
    //     $("p")
    //       .css("font-size", "16px");
    //   });
    $("#box").mousedown(function() {
      $("#box").css("background-color", "green");
    });
  });