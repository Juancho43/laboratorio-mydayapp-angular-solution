import {Component, Input} from '@angular/core';
import {Todo} from "../../core/Todo";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
@Input() todo!: Todo;
state: boolean = false;

}
