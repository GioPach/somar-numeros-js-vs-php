import { somarNumeros } from "./services/calculadora.js";

$(document).ready(function () {
  $("form#soma").on("submit", function (e) {
    e.preventDefault();
    somarNumeros()
  });
});
