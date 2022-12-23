"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number 😎";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 11;
// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 9;

// HANDLING EVENTS
// CLICK

// function carModel(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
// }

// const matthewsCar = new carModel("Ford", "Ka", 2019);
// console.log(matthewsCar.brand);

// function times2(e) {
//   let result = [];
//   result += e;
//   return e * 2;
// }
// console.log(times2([10, 20]));

// 1 - Programa para determinar quanto custa o valor hora do funcionário;
// 2 - levar em consideração o salário mensal;
// 3 - levar em consideração horas trabalhadas por mês;

function valorHora(salarioMensal, diasTrabalhados, horasDeTrabalhoPorDia) {
  let result = 0;
  const horasNoMes = diasTrabalhados * horasDeTrabalhoPorDia;

  result = salarioMensal / horasNoMes;

  return result;
}

console.log(valorHora(2000, 15, 6));
