import StateManager from "../components/stateManager.js";

function getNumeros() {
  const formGroups = Array.from(
    document.querySelectorAll("form#soma div.form-group")
  );
  const numeros = formGroups.map((formGroup) => validarNumero(formGroup));
  return numeros.every((numero) => numero != null) ? numeros : [];
}

function validarNumero(formGroup) {
  const input = formGroup.querySelector("input");
  const msg = formGroup.querySelector("small.msg-erro");
  if (input.value === "" || isNaN(input.value)) {
    StateManager.atualizarEstadoForm(input, msg, false);
    return null;
  } else {
    StateManager.atualizarEstadoForm(input, msg, true);
    return Number(input.value);
  }
}

function sendRequestSoma(output) {
  const $form = $("form#soma");
  $.ajax({
    type: "POST",
    url: "http://localhost/somar-php/somar.php",
    data: $form.serialize(),
    success: function (response) {
      $(output).text(response);
    },
  });
}

export function somarNumeros() {
  const numeros = getNumeros();
  const outputSoma = document.querySelector('output[name="resultado-soma"]');
  sendRequestSoma(outputSoma);
  StateManager.atualizarEstadoOutput(outputSoma, numeros.length > 0);
}
