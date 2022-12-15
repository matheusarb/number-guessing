"use strict";

console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number 😎";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 11;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 9;
