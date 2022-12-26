"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number 😎";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;
*/

// HANDLING EVENTS
// CLICK
// a function is just a value, therefore we can pass it to another function as a value

// in an application where we retrieve value from the user, the first thing we should do is check if
// a value was inputted or not

// DEFINING THE SECRET NUMBER - must be done outside of the "CLICK FUNCTION of the event listener"
// because it should be generated only once, when the application starts. If it is defined inside of
// the "CLICK FUNCTION" it would generate a new secret number on each click of the button

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number inserted! 🧨";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Number is too High! 📈 Try again";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game! 🥺";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Number is too Low! 📉 Try again";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game! 🥺";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    document.querySelector(".message").textContent =
      "Congratulations! The guess is correct!! 🎉";
  }
});
