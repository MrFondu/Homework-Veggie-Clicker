var random_result;
var wins = 0;
var losses = 0;
var previous = 0;

var startGame = function () {
    
    
    $(".veggys").empty();

 
    
    random_result = Math.floor(Math.random() * 90)




$("#result").html('Random Result: ');

$(".veggys").empty();



$("#result").html("Score to meet, and not to beet!: " + random_result);

for(var i = 0; i < 4; i++){

var worth = Math.floor(Math.random() * 9+2);
// console.log(worth);




var veg = $("<img>");
    veg.attr({
        "class": "veg",
        "data-random": worth
    });
       
        $(".veggys").append(veg);
    }
}

startGame();

var reset = function (){

}


$(document).on("click", ".veg", function () {

   var num = parseInt($(this).attr("data-random"));
// adds score to previous score 
    previous+=num;

    $("#previous").html(previous);

    console.log(previous);

   if (previous>random_result){
    
        losses++;
        $("#losses").html("Total Losses" + losses);
        startGame();
        previous =0;
        $("#previous").html(previous);
   }
   else if (previous === random_result){

       wins++;
       $("#wins").html("Total winss: " + wins);
       startGame();
       previous = 0;
       $("#previous").html(previous);
   }


});
