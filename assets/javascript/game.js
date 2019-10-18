$(document).ready(function() {

    var wins = 0;
     var losses = 0;
     var playerScore = 0;
     var computerScore = Math.ceil((Math.random() * 102) + 19);
     var green = Math.ceil(Math.random() * 12);
     var blue = Math.ceil(Math.random() * 12);
     var red = Math.ceil(Math.random() * 12);
     var yellow = Math.ceil(Math.random() * 12);


 function game(){
     if (playerScore == computerScore) {
         wins++;
         $("#Message").html("You won!");
         gameReset();
     } else if (playerScore > computerScore) {
         losses++;
         $("#Message").html("You lost!");
         gameReset();
     } else {
         scoreUpdate();
     }
 };



     $("#total").append(computerScore);

     $("#score").append(playerScore);


$(document).ready(function() {
     $("#green").click(function(){
         playerScore = playerScore + green;
         game();
     })

     $("#blue").click(function(){
         playerScore = playerScore + blue;
         game();
     })

     $("#red").click(function(){
         playerScore = playerScore + red;
         game();
     })

     $("#yellow").click(function(){
         playerScore = playerScore + yellow;
         game();
     });
 });

 function scoreUpdate() {
     $("#score").empty();
     $("#score").append(playerScore);

     $("#Wins").empty();
     $("#Wins").append(wins);

     $("#Losses").empty();
     $("#Losses").append(losses);
 };

 function gameReset(){
     playerScore = 0;
     computerScore = Math.floor((Math.random() * 102) + 19);
     $("#total").empty();
     $("#total").append(computerScore);
     green = Math.ceil(Math.random() * 12);
     blue = Math.ceil(Math.random() * 12);
     red = Math.ceil(Math.random() * 12);
     yellow = Math.ceil(Math.random() * 12);
     scoreUpdate();
 };	

});