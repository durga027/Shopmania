import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[]
  product: Product =new Product("Name1",220.0,"desc","category",2)
  cartProducts:Product[]=[]

  proUrl:string="http://localhost:8080/products"
  p:Product
  constructor(public http: HttpClient) { 
  }

  getProduct(prodId:number):Observable<Product>{
   return this.http.get<Product>(this.proUrl+"/"+prodId)
  }
  getAllProducts(): Observable<Product[]>{  
  return this.http.get<Product[]>(this.proUrl)
  }
  getCartProducts():Product[]{
      return this.cartProducts;
  }
  addProductToCart(prod:Product){
    this.cartProducts.push(prod)
  }
  clearCart(){
     this.cartProducts=[]
  }
}
