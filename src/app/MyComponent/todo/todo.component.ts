import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[]
  @Input() deleteTodo: Todo

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'title1',
        desc: 'this the description',
        active: true
      },
      {
        sno: 2,
        title: 'title2',
        desc: 'this the description',
        active: true
      },
      {
        sno: 3,
        title: 'title3',
        desc: 'this the description',
        active: true
      },
    ]
  }
  deleteItem(todo: Todo) {
    const index = this.todos.indexOf(todo)
    console.log('index', index)
    this.todos.splice(index, 1);
  }

  addtodo(todo: Todo) {
    this.todos.push(todo);
  }
}
