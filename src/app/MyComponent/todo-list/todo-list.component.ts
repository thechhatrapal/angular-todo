import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todoe: Todo
  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() todoEdit = new EventEmitter<Todo>();

  editTodo(value: Todo) {
    this.deleteTodo.emit(value);
  }

  todoDelete(value: Todo) {
    this.deleteTodo.emit(value);
  }
}
