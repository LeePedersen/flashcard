$(document).ready(function() {
  $("#argh").click(function() {
    $(".word1").toggle();
    $(".definition1").toggle();
  });
  $("#aargh").click(function() {
    $(".word2").toggle();
    $(".definition2").toggle();
  });
  $("button").click(function() {
    $("#variables").toggle();
    $("#variables-def").toggle();
  });
});
