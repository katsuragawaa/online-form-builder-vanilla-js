import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setPageTitle('Novo Questionário');
    this.answerArrays = [];
  }

  addAnswer() {
    this.answerArrays.push(this.answer.value);
    console.log(this.answer.value);
  }

  sendAnswer() {
    fetch(`/api/forms/${this.params.id}`, {
      method: 'put',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.answerArrays),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }

  async render() {
    this.div = document.querySelector('.container');

    fetch(`/api/forms/${this.params.id}`).then(response => {
      response.json().then(parsedJson => {
        console.log(parsedJson);
        parsedJson.questions.map(q => {
          console.log(q);

          this.question = document.createElement('div');
          this.question.innerText = q.question;

          this.answer = document.createElement('input');

          this.addButton = document.createElement('button');
          this.addButton.classList.add('btn');
          this.addButton.innerText = 'Add';
          this.addButton.addEventListener('click', () => {
            this.addAnswer();
          });

          this.div.append(this.question);
          this.div.append(this.answer);
          this.div.append(this.addButton);
        });
      });
    });
  }

  async getHtml() {
    return `
          <main>
						<div class="container"></div>
     	      <div class="return">
               <a class="btn" href="/" data-link>Voltar ao menu inicial</a>.
   		      </div>
          </main>
        `;
  }
}
