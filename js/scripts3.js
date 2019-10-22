$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat-says").prepend("<li><img src='img/cat.jpg'></li>");
    $("ul#dog-says").prepend("<li>Ruff ruff!</li>");
  });
  $("button#dog").click(function() {
    $("ul#dog-says").prepend("<li><img src='img/dog.jpg'></li>");
    $("ul#cat-says").prepend("<li>Meow</li>");
  });
});
