import { Injectable, OnInit } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService implements OnInit {
  private keyword = new BehaviorSubject<string>("Travel");
  public shareKeyword = this.keyword.asObservable();
  Key = "wK73rU3NtfyGz4_8kTr1Ezb_HxwN12slteA8Giz8mks";
  page = 1;
  per_page = 20;
  searchKeywordUpdated = false;
  public url = `https://api.unsplash.com/search/photos?page=${this.page}&per_page=${this.per_page}&client_id=${this.Key}&query=`;
  
  constructor(private http: HttpClient) { }

 searchImage(keyword : string){
      return this.http.get(
        this.url +  keyword

      );
  }

  ngOnInit(): void{
    
  }
}
