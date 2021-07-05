import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Página não encontrada");
  }

  async getHtml() {
    return `
            <h1>Página não encontrada</h1>
            <p>
                <a href="/home" data-link>Voltar ao menu inicial</a>.
            </p>
        `;
  }
}
