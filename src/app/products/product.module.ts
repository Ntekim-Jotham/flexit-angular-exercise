import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';


import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent 
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
