"use strict";

const inputNumber = document.querySelector('input[type="number"]');
const inputColor = document.querySelector('input[type="color"]');
let price = document.querySelector(
  "body > section > div > div.card__mainCard > p.card__mainCard-precio > span"
);
const quantity = document.querySelector(".card__mainCard-precio-cantidad");
const colorChoose = document.querySelector(
  ".card__mainCard-colorElegido-color"
);
const button = document.querySelector(".card__mainCard-button");

button.addEventListener("click", () => {
  const inputNumberValue = inputNumber.value;
  const inputColorValue = inputColor.value;
  const priceToNumber = Number(price.textContent);

  const priceMultiply = priceToNumber * inputNumberValue;

  price.textContent = priceMultiply.toString();
  quantity.textContent = inputNumberValue;
  colorChoose.style.backgroundColor = inputColorValue;
});
