import { LitElement, html, css } from 'lit-element';

class MyTest  extends LitElement {
    static get properties() {
        return {};
    }

  constructor() {
    super();
  }

  render() {
    return html`
      
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
}
customElements.define(my-test.is, My-Test);
export default My-Test