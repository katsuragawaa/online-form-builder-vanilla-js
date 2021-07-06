import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setPageTitle("HackTools");
    this.element = document.getElementById("root");
  }

  async render() {
    this.button = document.getElementById("new-form");
    this.button.href = "/new";

    this.createFormsList();
  }

  createFormsList() {
    this.formsDiv = document.querySelector(".forms-list");

    fetch("/api/forms").then((response) => {
      response.json().then((parsedJson) => {
        console.log(parsedJson);
        parsedJson.map((form) => {
          this.singleFormDiv = document.createElement("div");
          this.singleFormDiv.classList.add("form");

          this.formLink = document.createElement("span");
          this.formLink.innerText = form.title;

          this.buttonsDiv = document.createElement("div");
          this.buttonsDiv.classList.add("btn-container");

          this.answerButton = document.createElement("a");
          this.answerButton.innerText = "Responder";
          this.answerButton.classList.add("btn");
          this.answerButton.classList.add("answer");
          this.answerButton.href = `/forms/answer/${form.id}`;

          this.seeAnswersButton = document.createElement("a");
          this.seeAnswersButton.innerText = "Ver respostas";
          this.seeAnswersButton.classList.add("btn");
          this.seeAnswersButton.classList.add("result");
          this.seeAnswersButton.href = `/forms/${form.id}`;

          this.formsDiv.append(this.singleFormDiv);

          this.singleFormDiv.append(this.formLink);
          this.singleFormDiv.append(this.buttonsDiv);

          this.buttonsDiv.append(this.answerButton);
          this.buttonsDiv.append(this.seeAnswersButton);
        });
      });
    });
  }

  async getHtml() {
    return `
    <header>
      <h1>HackTools</h1>
      <a id="new-form" class="btn" data-link>Crie um questionário</a>
    </header>
    <main>
      <div class="forms-list"></div>
    </main>
  `;
  }
}
