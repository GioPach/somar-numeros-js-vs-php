import { somarNumeros } from "./services/calculadora.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    somarNumeros();
  });
});
