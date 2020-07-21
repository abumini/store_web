import { StoreService } from './../store.service';
import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  dealsSub: Subscription;
  products: Product[];
  error: any;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(): void{
    this.dealsSub = this.storeService
    .getProducts()
    .subscribe(
      prods => this.products = prods,
      err => this.error = err
    );
  }

}
