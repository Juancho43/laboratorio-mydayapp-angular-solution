import {Component, EventEmitter, Output} from '@angular/core';
import {TodoService} from "../../core/todo.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() update = new EventEmitter<boolean>();
  constructor(private todoService: TodoService) {
  }

  get todos() {
    return this.todoService.Todos;
  }
  get completed() {
    return this.todos.filter(todo => todo.completed).length;
  }

  handleDeleteCompleted(){
    this.todoService.setTodos(this.todos.filter(todo => {
      return !todo.completed;
    }))
    this.update.emit(true);
  }

}

