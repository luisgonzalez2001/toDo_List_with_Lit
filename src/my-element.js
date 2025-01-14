import { LitElement, css, html } from 'lit';
import { Task } from './components/my-task';
import { AddItem } from './components/my-add-item';
import { Header } from './components/my-header';

export class MyElement extends LitElement {
  static get properties() {
    return {
        taskList: {type: Array}
    }
  }

  constructor() {
    super()
    this.taskList = [
      {text: 'Ejemplo', completed: false}
    ];
  }

  render() {
    const toDos = this.taskList.filter(item => !item.completed);
    const toDosCompleted = this.taskList.filter(item => item.completed);

    const toDosRender = html`
      ${toDos.map(item => html`
            <my-task 
              .task=${item}
              @task_updated=${() => this.requestUpdate()}  
            ></my-task>
          `)}
    `;

    const toDosCompletedRender = html`
    ${toDosCompleted.map(item => html`
          <my-task 
            .task=${item}
            @task_updated=${() => this.requestUpdate()}
          ></my-task>
        `)}
    `;

    return html`
      <my-header>ToDo List with Lit</my-header>
      <my-add-item 
        .task_list=${this.taskList}
        @task-list-updated=${this._updateList}
      ></my-add-item>
      <hr>
      <h2>TO DO</h2>
      ${toDosRender}
      <h2>COMPLETED</h2>
      ${toDosCompletedRender}
    `
  }

  _updateList(event) {
    this.taskList = event.detail.task_list;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      my-header {
        width: 100%;
        margin-bottom: 20px;
      }

      h2 {
        color: #777;
        font-size: 16 px;
      }

      my-task {
        margin-bottom: 20px;
      }

      hr {
        width: 100%;
        max-width: 400px;
        margin-top: 20px;
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
