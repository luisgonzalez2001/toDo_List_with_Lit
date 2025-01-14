import { LitElement, html, css } from 'lit-element';

export class MyFooter  extends LitElement {

  static get styles() {
    return css`
      footer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 40px;
        padding: 10px 0;
        border-top: 1px solid gray;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <footer>
            <p>Made for Luis Gonzalez 😃</p>
        </footer>
    `;
  }
}

customElements.define('my-footer', MyFooter);