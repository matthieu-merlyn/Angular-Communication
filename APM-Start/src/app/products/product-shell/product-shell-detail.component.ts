import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { timer } from 'rxjs/observable/timer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-shell-detail',
  templateUrl: './product-shell-detail.component.html'
})
export class ProductShellDetailComponent implements OnInit, OnDestroy {
  product: IProduct | null;
  sub: Subscription;
  // get product(): IProduct {
  //   return this.productService.currentProduct;
  // }

  pageTitle: string = 'Product Detail';

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.sub = this.productService.selectedProductChanges$.subscribe(
      selectedProduct => this.product = selectedProduct
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
