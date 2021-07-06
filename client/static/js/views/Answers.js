import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setPageTitle('Respostas');
  }

  async render() {
    this.createInnerAnswersDiv();
  }

  createInnerAnswersDiv() {
    this.container = document.querySelector('.answers-container');

    fetch(`/api/forms/${this.params.id}`).then(response => {
      response.json().then(form => {
        console.log(form);
        this.h1 = document.createElement('h1');
        this.h1.innerText = form.title;
				this.container.append(this.h1);
				
				
        form.questions.map(q => {
					this.questionContainer = document.createElement('div');
					this.questionContainer.classList.add("question-container")
					this.container.append(this.questionContainer);

          this.questionDiv = document.createElement('div');
          this.questionDiv.classList.add('question');
          this.questionDiv.innerText = q.question;
          this.questionContainer.append(this.questionDiv);

          this.answerDiv = document.createElement('div');
          this.answerDiv.classList.add('answer');
          this.answerDiv.innerText = q.answer;
          this.questionContainer.append(this.answerDiv);
        });
      });
    });
  }

  async getHtml() {
    return `<main>
            <div class='answers-container'></div>
            <div class='return'>
                <a class="btn" href="/" data-link>Voltar ao menu inicial</a>.
            </div>
						</main>
        `;
  }
}
