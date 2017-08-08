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

  });
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("darkLight");
  });
});
