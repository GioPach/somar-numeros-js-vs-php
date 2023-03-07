export default class Sorteador {
  constructor(mensagens) {
    this.mensagens = mensagens;
  }

  getIntAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  sortearMensagem() {
    let numeroMsg = this.getIntAleatorio(1, Object.keys(this.mensagens).length);
    return this.mensagens[numeroMsg];
  }
}
