import StateManager from "../components/stateManager.js";

function getNumeros(operacao) {
  const formGroups = Array.from(
    document.querySelectorAll(
      `form[data-operacao="${operacao}"] div.form-group`
    )
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

export function somarNumeros() {
  const numeros = getNumeros("soma");
  const outputSoma = document.querySelector('output[name="resultado-soma"]');

  let isSubmitValid = numeros.length > 0;
  if (isSubmitValid) {
    let soma = numeros.reduce((acum, atual) => acum + atual, 0);
    outputSoma.textContent = soma;
  } else {
    outputSoma.textContent = "Revise os valores!";
  }
  StateManager.atualizarEstadoOutput(outputSoma, isSubmitValid);

  return isSubmitValid;
}
