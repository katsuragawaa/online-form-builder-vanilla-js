export default class {
  constructor(params) {
    this.params = params;
  }

  setPageTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
