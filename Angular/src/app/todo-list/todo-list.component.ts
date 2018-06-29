import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../interfaces/ListItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  private curId = 0;
  public todoText = '';

  private todoList: ListItem[] = [
    {
      id: 1,
      text: 'Présentation',
      done: false
    }
  ];

  ngOnInit() {
  }

  newTODO(e) {
    this.todoList.push({
      id: this.curId,
      text: this.todoText,
      done: false
    });
    e.preventDefault();
   }
}
