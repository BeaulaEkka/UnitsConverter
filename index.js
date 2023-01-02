"use strict";
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convertbutton");
const userInput = document.getElementById("user-input");

let meterToFoot = document.getElementById("convert-meter-foot");
let feetToMeter = document.getElementById("convert-feet-meter");
let literToGallon = document.getElementById("convert-liter-gallon");
let gallonToLiter = document.getElementById("convert-gallon-liter");
let kilogramToPound = document.getElementById("convert-kilogram-pound");
let poundToKilogram = document.getElementById("convert-pound-kilogram");

convertBtn.addEventListener("click", function () {
  if (userInput.value !== "") {
    meterToFoot.innerHTML = `${userInput.value} Meters = ${(
      userInput.value * 3.281
    ).toFixed(3)} Feet`;

    feetToMeter.innerHTML = `${userInput.value} Feet = ${(
      userInput.value / 3.281
    ).toFixed(3)} Meters`;

    literToGallon.innerHTML = `${userInput.value} Liters = ${(
      userInput.value * 0.264
    ).toFixed(3)} Gallons`;

    gallonToLiter.innerHTML = `${userInput.value} Gallons = ${(
      userInput.value / 0.264
    ).toFixed(3)} Liters`;

    kilogramToPound.innerHTML = `${userInput.value} Kilograms=${(
      userInput.value * 2.204
    ).toFixed(3)} Pounds`;

    poundToKilogram.innerHTML = `${userInput.value} Pounds=${(
      userInput.value / 2.204
    ).toFixed(3)} Kilograms`;
  }
});
