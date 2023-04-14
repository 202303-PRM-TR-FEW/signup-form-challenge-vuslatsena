"use strict";

const button = document.querySelector(".card-wrapper--button");
const inputs = document.querySelectorAll(".card-wrapper--input");
const errors = document.querySelectorAll(".error");

function showError(element) {
  const error = element.nextElementSibling;
  const label = error.nextElementSibling;

  error.classList.add("js-error");
  label.classList.add("js-error");
  element.classList.add("js-border");
}

function hideError(element) {
  const error = element.nextElementSibling;
  const label = error.nextElementSibling;

  error.classList.remove("js-error");
  label.classList.remove("js-error");
  element.classList.remove("js-border");
}

function validateInput(element) {
  if (!element.checkValidity()) {
    showError(element);
  } else {
    hideError(element);
  }
}

function validateForm() {
  inputs.forEach(validateInput);
}

button.addEventListener("click", validateForm);
