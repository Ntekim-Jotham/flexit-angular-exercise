import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Details';
  product: IProduct | undefined;
  imageWidth = 200;
  sub !: Subscription;
  products: IProduct[] = [];
  errorMessage = '';
  productName = '';

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = 
    // [
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      };
      // ,
      // {
      //   "productId": 2,
      //   "productName": "Garden Cart",
      //   "productCode": "GDN-0023",
      //   "releaseDate": "March 18, 2021",
      //   "description": "15 gallon capacity rolling garden cart",
      //   "price": 32.99,
      //   "starRating": 4.2,
      //   "imageUrl": "assets/images/garden_cart.png"
      // },
      // {
      //   "productId": 5,
      //   "productName": "Hammer",
      //   "productCode": "TBX-0048",
      //   "releaseDate": "May 21, 2021",
      //   "description": "Curved claw steel hammer",
      //   "price": 8.9,
      //   "starRating": 4.8,
      //   "imageUrl": "assets/images/hammer.png"
      // },
      // {
      //   "productId": 8,
      //   "productName": "Saw",
      //   "productCode": "TBX-0022",
      //   "releaseDate": "May 15, 2021",
      //   "description": "15-inch steel blade hand saw",
      //   "price": 11.55,
      //   "starRating": 3.7,
      //   "imageUrl": "assets/images/saw.png"
      // },
      // {
      //   "productId": 10,
      //   "productName": "Video Game Controller",
      //   "productCode": "GMG-0042",
      //   "releaseDate": "October 15, 2020",
      //   "description": "Standard two-button video game controller",
      //   "price": 35.95,
      //   "starRating": 4.6,
      //   "imageUrl": "assets/images/xbox-controller.png"
      // }
    // ]
    // this.sub = this.productService.getProducts().subscribe({
    //   next: products => {
    //     this.products = products;
    //   },
    //   error: err => this.errorMessage = err
    // });
  }

  // checkIfProductExist(productName: string): IProduct[]{
  //   return this.products.filter((product: IProduct) => 
  //   product.productName.includes())
  // }

  // onClick(): any{
     
  // }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
