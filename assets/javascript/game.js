var wins = 0
var losses = 0
var goalNumber = 0
var totalScore = 0
var redCrystal = 0
var blueCrystal= 0
var greenCrystal= 0
var yellowCrystal= 0


var random = randomNumber(19,120)

var redRandom = randomNumber(1,12)
var blueRandom = randomNumber(1,12)
var greenRandom = randomNumber(1,12)
var yellowRandom = randomNumber(1,12)

  function reset(){
    redRandom = randomNumber(1,12)
    blueRandom = randomNumber(1,12)
    greenRandom = randomNumber(1,12)
    yellowRandom = randomNumber(1,12)
    random = randomNumber(19,120)
    goalNumber=0
    totalScore: 0;

}

function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


$(document).ready(function() {

  $("#play").click(function(){
    document.getElementById("goalNumber").innerHTML = random;

});

  $("#redCrystal").click(function(){
    totalScore += redRandom;
    document.getElementById("currentScore").innerHTML = totalScore;

});

$("#blueCrystal").click(function(){
  totalScore += blueRandom;
  document.getElementById("currentScore").innerHTML = totalScore;

});

$("#yellowCrystal").click(function(){
  totalScore += purpleRandom;
  document.getElementById("currentScore").innerHTML = totalScore;

});

$("#greenCrystal").click(function(){
  totalScore += greenRandom;
  document.getElementById("currentScore").innerHTML = totalScore;

});

document.onclick = function () {

if (random === totalScore) {
    wins++;
    $("#winCount").html(wins);
    reset();

} if (random > totalScore){
  losses++;
  $("#lossCount").html(losses);
  reset();
  }

  console.log(losses);
  };
});