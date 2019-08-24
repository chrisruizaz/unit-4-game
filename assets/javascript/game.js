////
//global variable
////
var newNumber = 0;
var totalGems = 0;
var gemBlue = randomIntFromInterval(50, 75);
var gemGreen = randomIntFromInterval(35, 49);
var gemOrange = randomIntFromInterval(20, 34);
var gemRed = randomIntFromInterval(11, 19);
var gemPurple = Math.floor(Math.random() * 10) + 1;

var totalStones = [gemBlue, gemGreen, gemOrange, gemPurple, gemRed];
// totalStones.length
// newNumber = random number from 1-totalStones.length
//+ random number, thats NOT the same number, from 1-totalSTones
// add those two numbers together.
// for loop is needed.
for (i = 0; i < totalStones.length; i++) {
  newNumber += totalStones[randomIntFromInterval(0, totalStones.length - 1)]; //I know what happened. you were looking for index 0-6 it only has 0-5
}
console.log(`newNumber equals ${newNumber}`);
// newNumber = totalstones[2] + totalstones[0]
var wins = 0;
var loses = 0;
var totalScore;
var firstGemClicked;
var secondGemClicked;
////
//global functions
////
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
////
//on ready function
////
$(document).ready(function() {
  console.log("ready!");
  document.getElementById("newNumber").innerHTML = newNumber;
});
function gemSelected(x) {
  GemClicked = x;
  // if firstGemClicked has a value then add to secondGemClicked. Then add first and second to see if they are the same.

  // if the guess is correct then wins++
  // if the guess was wrong then set the value of firstGEmClicked and secondGemClicked to nothing
  console.log(x);
}
if (newNumber === totalScore) {
  wins++, (document.getElementById("wins").innerHTML = wins);
}
else (newNumber<totalScore){
    loses++, (document.getElementById("loses").innerHTML = loses);
}
////
//crystal function
////
console.log("my game.js file is attached!");
$("#blue").click(function() {
  gemSelected(gemBlue);
});
$("#green").click(function() {
  gemSelected(gemGreen);
});
$("#orange").click(function() {
  gemSelected(gemOrange);
});
$("#red").click(function() {
  gemSelected(gemRed);
});
$("#purple").click(function() {
  gemSelected(gemPurple);
});

$(".card-text").append("<p></p>");
