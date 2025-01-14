import { LitElement, html, css } from "lit";
import { Input } from "./my-input";

export class Task extends LitElement {
    static get properties() {
        return{
            task: {
                state: true,
                type: Object,
            },
        }
    }

    constructor() {
        super();
        this.task = {text: "Termina ToDoList", completed: false};
    }

    static get styles() {
        return css`
            * {
                box-sizing: border-box;
            }

            :host {
                display: block;
            }

            div {
                width: 100%;
                height: 50px;
                max-width: 420px;
                min-width: 280px;
                display: flex;
                align-items: center;
                gap: 20px;
                padding: 10px;
                border-radius: 8px;
                border: 1px solid gray;
                box-shadow: 0 2px 4px gray
            }

            .completed {
                text-decoration-line: line-through;
                color: #777;
            }
        `;
    }

    render() {
        return html`
            <div>
                <my-input 
                    ?hidecompleted=${this.task.completed}
                    @toggle-completed=${this._toggleCompleted}
                ></my-input>
                <p 
                class=${this.task.completed ? 'completed' : ''}
                >${this.task.text}</p>
            </div>
        `;
    }

    _toggleCompleted() {
        this.task.completed = !this.task.completed;
        this._dispatchTask();
    }

    _dispatchTask() {
        const event = new CustomEvent('task_updated', {
            detail: { task: this.task }
        });
        this.dispatchEvent(event);
    }
}
customElements.define('my-task', Task);