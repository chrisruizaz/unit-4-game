////
//global variable
////
var newNumber = 0;
var totalGems = 0;
var gemPurple = randomIntFromInterval(50, 75);
var gemGreen = randomIntFromInterval(35, 49);
var gemOrange = randomIntFromInterval(20, 34);
var gemRed = randomIntFromInterval(11, 19);
var gemBlue = Math.floor(Math.random() * 10) + 1;
var gemWhite = 1;

var totalStones = [gemBlue, gemGreen, gemOrange, gemPurple, gemRed];
// totalStones.length
// newNumber = random number from 1-totalStones.length
//+ random number, thats NOT the same number, from 1-totalSTones
// for loop is needed.
for (i = 0; i < totalStones.length; i++) {
  newNumber += totalStones[randomIntFromInterval(0, totalStones.length - 1)];
}
console.log(`newNumber equals ${newNumber}`);
// wins & loses
var wins = 0;
var loses = 0;
//the user's total
var totalScore = 0;
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
  totalScore += x;
  document.getElementById("userScore").innerHTML = totalScore;
  console.log(x);
  console.log(`User Gem Total is: ${totalScore}`);
  isthegameover(newNumber, totalScore);
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
$("#white").click(function() {
  gemSelected(gemWhite);
});
$(".card-text").append("<p></p>");

function isthegameover(targetScore, userScore) {
  if (userScore > targetScore) {
    //user lost
    alert("You Lost");
    loses++;
    resetlose();
    document.getElementById("loses").innerHTML = loses;
  } else if (userScore == targetScore) {
    //user wins
    alert("You Won");
    wins++;
    document.getElementById("wins").innerHTML = wins;
    resetwin();
  } else {
    //nothing happens
    console.log("keep clicking gems");
    return;
    alert(`I said stop@!!!!!!`);
  }
}
function resetlose() {
  //change total score to 0 so you dont lose after winning
  totalScore = 0;
  for (i = 0; i < totalStones.length; i++) {
    //gets easier with lose
    newNumber += totalStones[randomIntFromInterval(0, totalStones.length - 1)];
  }
  document.getElementById("userScore").innerHTML = totalScore;
  document.getElementById("newNumber").innerHTML = newNumber;
}
function resetwin() {
  //change total score to 0 so you dont lose after winning
  totalScore = 0;
  for (i = 0; i < totalStones.length; i++) {
    //gets harder with wins
    newNumber = totalStones[randomIntFromInterval(0, totalStones.length - 1)];
  }
  document.getElementById("userScore").innerHTML = totalScore;
  document.getElementById("newNumber").innerHTML = newNumber;
}
