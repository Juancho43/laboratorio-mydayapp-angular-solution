import { Component, OnInit } from '@angular/core';
import {Todo} from "../../core/Todo";
import {TodoService} from "../../core/todo.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  {

  todos : Todo[]  = [];
constructor(private todoService: TodoService) {
  this.todos = this.todoService.Todos;
}


}
