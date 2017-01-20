

var bigPingPong = function(number) {
  var count = [];
  for(var index = 1; index <= number; index++) {
    if (index % 100 === 0) {
      count.push("PIIIING-POOOOONG");
    }
    else if (index % 15 === 0) {
      count.push("ping-pong");
    } else if (index % 5 === 0) {
      count.push("pong");
    } else if (index % 3 ===0) {
      count.push("ping");
    } else {
    count.push(index);
    }
  }
  var countAsString = count.join(", ");
  return countAsString;



};


//Front End Logic

$(document).ready(function(){
  $("form#pingPongIt").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#numberEntry").val();

    $(".result").text(bigPingPong(numberInput));

  });
});
