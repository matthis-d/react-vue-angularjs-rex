import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../../interfaces/ListItem';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  @Input() item: ListItem;

  ngOnInit() {
  }

}
