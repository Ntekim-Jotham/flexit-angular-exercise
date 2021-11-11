import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from './gallery.service';
@Component({
  selector: 'flex-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  items: any = [];
  keyword: string = 'fun';
  sub!: Subscription;
  constructor(private publicApi: ImageService) { }

  ngOnInit(): void {
    this.sub = this.publicApi.searchImage(this.keyword)
    .subscribe((data: any) => {
      this.items = data.results;
      console.log(data)
    });
    console.log(this.items)
  }

  @Input()
  set searchKeyword(value: string){
      if (value !== '') {
        this.keyword = value;
         this.sub = this.publicApi.searchImage(this.keyword).subscribe((resp: any) => {
          this.items = resp.results;    
        });

      }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
