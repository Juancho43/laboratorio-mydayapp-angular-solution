import { Injectable } from '@angular/core';
import {Todo} from "./Todo";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];
  constructor(private storageService: StorageService) {
    this.loadFromStorage();
  }

  isEmpty() : boolean {
    return this.todos.length === 0;
  }

  loadFromStorage() {
    this.setTodos(this.storageService.readStorage() as Todo[]);
  }
  get Todos() {
    return this.todos;
  }

  setTodos(todos: Todo[]) {
    this.todos = todos;
    this.storageService.save(todos);
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
    this.storageService.save(this.todos);
  }

  editTodo(todo : Todo){
    this.todos = this.todos.map(t => {
      if (t.id === todo.id) {
        return { ...t, title: todo.title };
      }
      return t;
    });
    this.storageService.save(this.todos);
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.storageService.save(this.todos);
  }

  completeTodo(todo: Todo) {
    this.todos = this.todos.map(t => {
      if (t.id === todo.id) {
        return { ...t, completed: todo.completed };
      }
      return t;
    });
    this.storageService.save(this.todos);
  }
}
