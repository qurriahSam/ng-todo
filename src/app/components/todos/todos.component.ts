import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos: Todo[] = [];
  @Output() toggleCompletedEvent = new EventEmitter<number>();

  toggleCompleted(index: number) {
    this.toggleCompletedEvent.emit(index);
  }
}
