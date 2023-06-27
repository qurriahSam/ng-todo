import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import cryptoRandomString from 'crypto-random-string';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  @Output() newTodoItemEvent = new EventEmitter<Todo>();

  constructor(private _todoService: TodoService) {}

  addTask(todo: Todo) {
    if (todo.task.length <= 0) {
      return;
    }
    this._todoService.addTodo(todo);
    console.log(todo);
    this.addNewTodo(todo);
  }

  addNewTodo(todo: Todo) {
    this.newTodoItemEvent.emit(todo);
  }

  getId() {
    const id = cryptoRandomString({ length: 10 });
    return id;
  }
}
