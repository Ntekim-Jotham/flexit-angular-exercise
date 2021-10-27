import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flex-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isActive = true;
  searchKeyWorld = '';
  constructor() { }

  ngOnInit(): void {
  }

}
