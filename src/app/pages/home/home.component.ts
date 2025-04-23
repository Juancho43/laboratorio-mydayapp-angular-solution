
import {Todo} from "../../core/Todo";
import {TodoService} from "../../core/todo.service";
import {Component} from "@angular/core";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  {

  todos : Todo[]  = [];

  constructor(private todoService: TodoService) {
    this.updateTodos();
  }


  getTodos() : Todo[]{
    return this.todoService.Todos;
  }

  updateTodos(){
    this.todos = this.getTodos();
  }

}
