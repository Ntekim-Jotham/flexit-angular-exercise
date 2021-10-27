import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent,
    HttpClientModule
  ]
})
export class DashboardModule { }
