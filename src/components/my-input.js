import { LitElement, html, css } from "lit";

export class Input extends LitElement {
    static get properties() {
        return {
            hideCompleted: { type: Boolean },
        }
    }

    constructor(){
        super();
        this.hideCompleted = false;
    }

    static get styles() {
        return css`
            input {
                display: none;
            }

            span {
                display: inline-block;
                position: relative;
                height: 1em;
                width: 1em;
                background: #a7a7a7;
                border-radius: 100%;
                transition: all 0.7s;
            }

            label {
                display: flex;
                font-size: 2em;
                cursor: pointer;
            }

            label input:checked ~ span {
                box-shadow: 0 0 20px 0 #09f;
            }

            span::after {
                content: "";
                position: absolute;
                border: solid black;
                border-width: 0 0.15em 0.15em 0;
                transform: rotate(45deg);
                width: 0.25em;
                height: 0.5em;
                left: 0.3em;
                top: 0.17em;
                opacity: 0;
                transition: .3s ease;
            }

            label input:checked ~ span:after {
                opacity: 1;
            }
        `;
    }

    render() {
        return html`
            <label>
                <input 
                    type="checkbox" 
                    ?checked=${this.hideCompleted}
                    @change=${this._handleChange}
                >
                <span></span>
            </label>
        `;
    }

    _handleChange(event) {
        const changeEvent = new CustomEvent('toggle-completed', {
            detail: { hideCompleted: event.target.checked }
        });
        this.dispatchEvent(changeEvent);
    }
}
customElements.define('my-input', Input);