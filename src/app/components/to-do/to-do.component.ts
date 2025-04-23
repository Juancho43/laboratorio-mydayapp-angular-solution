import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../core/Todo";
import {TodoService} from "../../core/todo.service";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
@Input() todo!: Todo;
@Output() deleteTodo = new EventEmitter<boolean>();
state: boolean = false;
constructor(private todoService: TodoService) {
}
handleEdit() {
  this.state = !this.state;
}
handleSave() {
  this.state = false;
  this.todoService.editTodo(this.todo)
}
handleDelete() {
  this.todoService.deleteTodo(this.todo);
  this.deleteTodo.emit(true);
}

handleComplete() {
  this.todo.completed = !this.todo.completed;
  this.todoService.completeTodo(this.todo);
  this.deleteTodo.emit(true);
}


}
