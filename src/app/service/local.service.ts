import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  addTodo(todo: Todo) {
    const todos = this.getTodo();
    todos.push(todo);

    this.setItem(todos);
  }

  getTodo() {
    const todos = this.getItem();
    return JSON.parse(todos) as Todo[];
  }

  updateTodo(id: string) {
    const todos = this.getTodo();

    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });

    //todos[index].completed = !todos[index].completed;
    this.setItem(todos);
  }

  private setItem(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  private getItem() {
    const todos = localStorage.getItem('todos');
    if (!todos) {
      return '[]';
    }
    return todos;
  }
}
