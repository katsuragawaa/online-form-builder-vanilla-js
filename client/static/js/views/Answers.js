import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setPageTitle("Respostas");
    console.log(this.params)
  }

  async render() {
    
  }

  async getHtml() {
    return `
            <h1>New</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/" data-link>Voltar ao menu inicial</a>.
            </p>
        `;
  }
}
