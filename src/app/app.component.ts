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

  toggleCompletedStatus(id: string) {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });

    //this.todos[index].completed = !this.todos[index].completed;
    this._todoService.toggleCompleted(id);
  }

  deleteTodo(id: string) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === id) {
        this.todos.splice(i, 1);
      }
    }
    this._todoService.deleteTodo(id);
  }

  filterTab(label: string) {
    if (label === 'active') {
      return this.todos.filter((todo) => todo.completed === false);
    } else if (label === 'completed') {
      return this.todos.filter((todo) => todo.completed === true);
    }
    return this.todos;
  }
}
