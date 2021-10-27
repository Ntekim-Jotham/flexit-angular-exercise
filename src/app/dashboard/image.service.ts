import { Injectable, OnInit } from '@angular/core';
import {  HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageService implements OnInit {
  Key = "wK73rU3NtfyGz4_8kTr1Ezb_HxwN12slteA8Giz8mks";
  page = 1;
  per_page = 21;
  searchKeyword = '';
  
  constructor(private http: HttpClient) { }
  getImage() {
    return this.http.get(
      `https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.Key}`
    );
  }

  // searchImage(){
  //   return this.http.get(
  //     `https://api.unsplash.com/search/photos?client_id=${this.Key}&query=` +  this.searchKeyword
  //   );
  // }
  ngOnInit(): void{
    
  }
}
