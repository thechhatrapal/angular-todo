import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() todoAdd = new EventEmitter<Todo>();
  title: string
  desc: string
  constructor() {}
  onSubmit(): void{
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active:true
    }
    this.todoAdd.emit(todo)
  }
}
