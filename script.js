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

//in an application where we retrieve value from the user, the first thing we should do is check if
//a value was inputted or not

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number inserted! 🧨";
  }
});
