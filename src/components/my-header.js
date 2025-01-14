import { LitElement, html, css } from "lit";

export class Header extends LitElement {
    static get properties() {
        return {

        }
    }

    constructor() {
        super();
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 40px;
                padding: 10px 20px;
                border-bottom: 1px solid gray;
            }

            div {
                display: flex;
                align-items: center;
                gap: 20px;
            }

            img {
                width: 60px;
                height: 60px
            }

            ul {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            li {
                list-style: none;
            }

            a {
                text-decoration: none;
            }
        `;
    }

    render() {
        return html `
            <header>
                <div>
                    <img src="https://avatars.githubusercontent.com/u/18489846?v=4">
                    <slot></slot>
                </div>
                <nav>
                    <ul>
                        <li><a href="https://github.com/luisgonzalez2001/toDo_List_with_Lit">GitHub</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}
customElements.define('my-header', Header);