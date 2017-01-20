var sequence = function(number) {
  if(number === 1) return "1";
  return sequence(number - 1) + ", " + number;
}

var bigPingPong = function(number) {





}



//Front End Logic
$(document).ready(function() {
  $("form#pingPongIt").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#numberEntry").val();

    $(".result").text(NAMEOFBIGTOPFUNCTION(numberInput));

  });
});
