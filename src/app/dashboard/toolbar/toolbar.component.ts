import { Component, OnInit } from '@angular/core';
import { ImageService } from '../gallery/gallery.service';

@Component({
  selector: 'flex-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isActive = true;
   searchKeyword = '';
   keyword = '';
  constructor( ) { }

  ngOnInit(): void {
  }

  getKeyword(){
    this.keyword = this.searchKeyword;
    console.log(this.keyword);
  }  
}
