









var count = [];
var sequence = function(number) {
count.push(number);
return sequence;
}

// var bigPingPong = function(number) {
//
//
//
//
// return bigPingPong();
// }



//Front End Logic
$(document).ready(function() {
  $("form#pingPongIt").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#numberEntry").val();

    $(".result").text(sequence(numberInput));

  });
});
