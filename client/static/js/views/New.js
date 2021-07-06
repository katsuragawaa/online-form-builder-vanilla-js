import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setPageTitle('Novo Questionário');
    this.questionsArray = []
  }

  addQuestion() {
    const question = this.input.value;
    console.log(question);
  }

  async render() {
    this.createQuestion();
    this.form = document.getElementById('form-creation')
    this.form.append(this.div)
  }

  // tem que criar outra classe pra isso
  createQuestion() {
    this.input = document.createElement('input');
    this.input.classList.add('single-question');
    this.button = document.createElement('button');
    this.button.innerText = 'Adicionar';
    this.button.classList.add('btn');
    this.div = document.createElement('div');

    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.input.value !== '') {
        this.addQuestion.call(this);
        this.input.value = '';
      }
    });

    this.div.append(this.input)
    this.div.append(this.button)
  }

  async getHtml() {
    return `
          <main>
            <form id="form-creation">
              <input type="text" class="form-title" value="Formulário sem título">
            </form>
            <p>
            </p>
            <div class="return">
                <a class="btn"href="/" data-link>Voltar ao menu inicial</a>.
            </div>
          </main>
        `;
  }
}
