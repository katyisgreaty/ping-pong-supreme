

var bigPingPong = function(number) {

  
};


//Front End Logic

$(document).ready(function(){
  $("form#pingPongIt").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#numberEntry").val();
    // var numberInputParse = parseInt($("input#numberEntry").val());
    // var numberInputLength = numberInput.length;

    $(".result").text(bigRomanConvert(numberInput));

  });
});
