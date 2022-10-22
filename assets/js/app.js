"use strict";

const inputNumber = document.querySelector('input[type="number"]');
const inputColor = document.querySelector('input[type="color"]');
let price = document.querySelector(
  ".card__mainCard-precio > span"
);
const quantity = document.querySelector(".card__mainCard-precio-cantidad");
const colorChoose = document.querySelector(
  ".card__mainCard-colorElegido-color"
);
const button = document.querySelector(".card__mainCard-button");

const originalPrice = price.textContent

button.addEventListener('click', () => {
  price.textContent = originalPrice

  inputNumber.value > 0 && inputNumber.value < 2 ? originalPrice : price.textContent = Number(price.textContent) * Number(inputNumber.value)

  quantity.textContent = inputNumber.value;
  colorChoose.style.backgroundColor = inputColor.value
})