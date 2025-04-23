import { Component } from '@angular/core';
import {TodoService} from "../../core/todo.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
newTodo : string = '';

constructor(private todoService: TodoService) {}

addTodo() {
  if (this.newTodo.trim() !== '') {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = '';
  }
}

}
