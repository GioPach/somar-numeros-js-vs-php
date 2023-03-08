import Sorteador from "../utils/sorteador.js";

export default class StateManager {
  static atualizarEstadoForm(input, msg, isValido) {
    if (isValido) {
      input.setAttribute("valido", true);
      msg.textContent = "";
    } else {
      input.setAttribute("valido", false);
      msg.textContent = "Por favor, digite um número!";
    }
  }

  static atualizarEstadoOutput(outputSoma, isValido) {
    const msgFinal = document.querySelector('output[name="msg-final"]');
    if (isValido) {
      outputSoma.setAttribute("valido", true);
      const sorteador = new Sorteador({
        1: "Boa conta!",
        2: "Esse número é bala!",
        3: "Essa conta foi sagaz!",
      });
      msgFinal.textContent = sorteador.sortearMensagem();
    } else {
      outputSoma.setAttribute("valido", false);
      msgFinal.textContent = "";
    }
  }
}
