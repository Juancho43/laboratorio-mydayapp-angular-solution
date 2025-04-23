import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../core/Todo";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  @Input() todos : Todo[] = [];
  @Output() deleteTodo = new EventEmitter<boolean>();
  handleDelete() {
    this.deleteTodo.emit(true);
  }
}
