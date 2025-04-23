import { Injectable } from '@angular/core';
import {Todo} from "./Todo";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private key = 'mydayapp-angular';

  constructor() { }

  save(task: Todo[]): void {
    localStorage.setItem(this.key, JSON.stringify(task));
  }

  readStorage(){
    return JSON.parse(
      localStorage.getItem(this.key) || '[]'
    );
  }
}
