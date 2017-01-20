
//Front End Logic
$(document).ready(function(){
  $("form#pingPongIt").submit(function(event){
    event.preventDefault();
    var numberInput = $("input#numberEntry").val();

    $(".result").text(NAMEOFBIGTOPFUNCTION(numberInput));

  });
});
