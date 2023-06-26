import { Component } from '@angular/core';
import { TodoService } from './service/todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  todos: Todo[] = [];
  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this._todoService.todos$.subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
  }
}
