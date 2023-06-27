import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos: Todo[] = [];
  @Input() completedTab = false;
  @Output() toggleCompletedEvent = new EventEmitter<string>();
  @Output() deleteTodoEvent = new EventEmitter<string>();
  @Output() deleteAllTodosEvent = new EventEmitter<string[]>();

  toggleCompleted(id: string) {
    this.toggleCompletedEvent.emit(id);
  }

  deleteTodo(id: string) {
    this.deleteTodoEvent.emit(id);
  }

  deleteAllTodos() {
    let todosId = this.todos.map((todo) => {
      return todo.id;
    });
    this.deleteAllTodosEvent.emit(todosId);
  }
}
