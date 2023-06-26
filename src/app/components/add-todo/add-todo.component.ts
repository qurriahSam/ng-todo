import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  @Output() newTodoItemEvent = new EventEmitter<Todo>();
  todo: Todo = { task: '', completed: false };

  constructor(private _todoService: TodoService) {}

  addTask(todo: Todo) {
    this._todoService.addTodo(todo);
    console.log(todo);
    this.addNewTodo(todo);
    //    this.todo.task = '';
  }

  addNewTodo(todo: Todo) {
    this.newTodoItemEvent.emit(todo);
  }
}
