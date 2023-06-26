import { Injectable } from '@angular/core';
import { of, tap, Subject } from 'rxjs';
import { Todo } from '../todo';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private _local: LocalService) {}

  todos$ = of(this._local.getTodo()).pipe(tap((data) => console.log(data)));

  addTodo(todo: Todo) {
    this._local.addTodo(todo);
  }
}
