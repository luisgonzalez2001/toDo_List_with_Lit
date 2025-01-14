import { LitElement, html, css } from "lit";

export class AddItem extends LitElement {
    static get properties(){
        return {
            task_list: {type: Array}
        }
    }

    constructor() {
        super();
        this.task_list = [];
    }

    static get styles() {
        return css`
            * {
                box-sizing: border-box;
            }

            div {
                width: 100%;
                height: 50px;
                max-width: 420px;
                min-width: 280px;
                padding: 5px 20px;
                border-radius: 50px;
                border: none;
                background: #ecf1f5;
            }

            form {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            input {
                width: 80%;
                font-size: 18px;
                border: none;
                background: transparent;
            }

            input:focus{
                outline:none;
            }

            button {
                width: 30px;
                height: 30px;
                font-size: 24px;
                font-weight: bolder;
                color: white;
                border: none;
                border-radius: 100%;
                background: #397ab4;
            }

            button:hover {
                cursor: pointer;
                box-shadow: 0 0 20px 0 #09f;
            }
        `;
    }

    render() {
        return html`
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Add Item"
                        id = "new-task"    
                    >
                    <button 
                        type="submit"
                        @click=${this._addTask}    
                    >+</button>
                </form>
            </div>
        `;
    }

    _addTask(event) {
        event.preventDefault();
        const input = this.shadowRoot.getElementById('new-task');
        const newTask = {text: input.value.trim(), completed: false};
        if (newTask.text) {
            this.task_list = [...this.task_list, newTask];
            this._dispatchTaskList();
            input.value = '';
        }
    }

    _dispatchTaskList() {
        const event = new CustomEvent('task-list-updated', {
            detail: { task_list: this.task_list }
        });
        this.dispatchEvent(event);
    }
    
}
customElements.define('my-add-item', AddItem);