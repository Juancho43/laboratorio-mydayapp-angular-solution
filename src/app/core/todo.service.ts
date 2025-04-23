import { Injectable } from '@angular/core';
import {Todo} from "./Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];
  constructor() { }

  get Todos() {
    return this.todos;
  }

  createTodo(title: string) : Todo {
  return {
    id: new Date().toISOString(),
    title: title,
    completed: false
  };

  }

  addTodo(todo: string) {
    this.todos.push(this.createTodo(todo));
  }
}
