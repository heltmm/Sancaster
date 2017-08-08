$(document).ready(function() {
  $("#clickableUs").click(function() {
    $("#us").slideToggle();
  });
  $("#clickableEu").click(function() {
    $("#eu").slideToggle();
  });
  $("#clickableAu").click(function() {
    $("#au").slideToggle();
  });
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("lightDark");
    $("p").addClass("borderWhite");

  });
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("darkLight");
    $("p").addClass("borderBlack");
  });
  $("p").click(function(){
    $("p").addClass("borderBlack");
  })
});
