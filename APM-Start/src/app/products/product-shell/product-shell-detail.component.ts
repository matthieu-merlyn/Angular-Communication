import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'pm-product-shell-detail',
  templateUrl: './product-shell-detail.component.html'
})
export class ProductShellDetailComponent implements OnInit {
  get product(): IProduct {
    return this.productService.currentProduct;
  }

  pageTitle: string = 'Product Detail';

  constructor(private productService: ProductService) {
  }

  ngOnInit() {

  }

}
