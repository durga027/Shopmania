import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product: Product
  prodId:number
  productsInCart: Product[]=[]

  constructor(public route: ActivatedRoute, public productService: ProductsService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params.subscribe((x)=>{
      let temp=x['prodId'];
      this.prodId = +temp
    })

    this.productService.getProduct(this.prodId).subscribe((data:any)=>{
      this.product = data
    })
  }

  addToCart(prod:Product, content){
    console.log(prod)
    this.productService.addProductToCart(prod)
    this.modalService.open(content)
  }

}
