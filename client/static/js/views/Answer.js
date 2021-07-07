
import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setPageTitle('Novo Questionário');
    this.questionsArray = [];
  }

  sendForm() {
    this.formTitle = document.getElementById('form-title');
    this.questionsArray.unshift(this.formTitle.value);
    console.log(this.questionsArray);
    fetch('/api/forms', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.questionsArray),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }

  addQuestion() {
    this.input.value;
    this.input.setAttribute('readonly', '');
    this.questionsArray.push(this.input.value);
    console.log(this.questionsArray);
  }

  async render() {
    this.div = document.querySelector('.questions');
    this.input = document.createElement('input');
    this.input.classList.add('single-question');
    this.div.append(this.input);

    this.addButton = document.getElementById('add-btn');
    this.addButton.addEventListener('click', e => {
      e.preventDefault();
      console.log('hi');
      if (this.input.value != '') {
        this.addQuestion.call(this);

        this.input = document.createElement('input');
        this.input.classList.add('single-question');
        this.div.append(this.input);
        this.input.value = '';
      }
    });

    this.sendButton = document.getElementById('submit-btn');
    this.sendButton.addEventListener('click', e => {
      e.preventDefault();
      console.log('send');
      this.sendForm();
      setTimeout(() => {
        location.href = e.target.href;
      }, 500);
    });

    this.form = document.getElementById('form-creation');
    this.form.append(this.div);
  }

  async getHtml() {
    return `
          <main>
            <form id="form-creation">
              <input type="text" id="form-title" value="Formulário sem título">
							<div class="questions"></div>
            </form>
					
							<div class="btn-container">
								<a class="btn" id="add-btn">Adicionar</a>
								<a class="btn" id="submit-btn" href="/" date-link>Enviar</a>
							</div>
      	      <div class="return">
                <a class="btn" href="/" data-link>Voltar ao menu inicial</a>.
     		      </div>
          </main>
        `;
  }
}


