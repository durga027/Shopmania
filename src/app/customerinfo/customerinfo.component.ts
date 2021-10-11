import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css']
})
export class CustomerinfoComponent implements OnInit {

  constructor(public productService: ProductsService, public router: Router) { }
  
  detailsForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$")]),
      pincode: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{6}$")]),
      mobile: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")])
      
    }
  );
  get f(){
    return this.detailsForm.controls;
  }
  ngOnInit(): void {
    
  }
  
  submitDetails(){
    this.productService.cartProducts=[]
    this.router.navigate(['/order-placed'])
  }

}
