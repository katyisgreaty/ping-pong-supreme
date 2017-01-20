

var bigPingPong = function(number) {
  var count = [];
  for(var index = 1; index <= number; index++) {
    if (index % 3 ===0) {
      count.push("ping");
    } else {
    count.push(index);
    }
  }
  var countAsString = count.join(", ");
  return countAsString;
  // return number + ", " + (number - (count.length - 1)) ;
};


//Front End Logic

$(document).ready(function(){
  $("form#pingPongIt").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#numberEntry").val();
    // var numberInputParse = parseInt($("input#numberEntry").val());
    // var numberInputLength = numberInput.length;

    $(".result").text(bigPingPong(numberInput));

  });
});
