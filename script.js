"use strict";

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  if (!guess) {
    //no inputs
    document.querySelector(".message").textContent = "no number";
  } else if (guess > number) {
    if (score > 1) {
      //when player chose high number
      document.querySelector(".message").textContent = "too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lose the game!";
    }
  } else if (guess < number) {
    //when plpayer choose lower number
    document.querySelector(".message").textContent = "too low!";
    score--;
    document.querySelector(".score").textContent = score;
  } //when player wins
  else {
    document.querySelector(".message").textContent = "correct answer!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
