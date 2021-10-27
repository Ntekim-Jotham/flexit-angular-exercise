import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
@Component({
  selector: 'flex-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  items: any = [];
  name = [];
  constructor(private publicApi: ImageService) { }

  ngOnInit(): void {
    this.publicApi.getImage().subscribe((resp: any) => {
      this.items = resp;
      // this.name = this.ite
      console.log(this.items);
    });
  }

  imageLoop(){
    
  }
}
