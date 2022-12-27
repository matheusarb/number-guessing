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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage("No Number inserted! 🧨");
    //when guess is right
  } else if (guess === secretNumber) {
    displayMessage("Congratulations! The guess is correct!! 🎉");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // HIGHSCORE logic
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "Number is too High! 📈 Try again"
          : "Number is too Low! 📉 Try again"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game! 🥺");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   //when input is greater than the secretNumber
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent =
  //         "Number is too High! 📈 Try again";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You lost the game! 🥺";
  //       document.querySelector(".score").textContent = 0;
  //     }

  //     //when input is lower than the secretNumber
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent =
  //         "Number is too Low! 📉 Try again";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You lost the game! 🥺";
  //       document.querySelector(".score").textContent = 0;
  //     }

  //when input is correct and equal to the secretNumber
  //   }
});

//Reset functionality
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
