import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { ProductslistComponent } from '../productslist/productslist.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  products: Product[]
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getCartProducts()
  }

}
