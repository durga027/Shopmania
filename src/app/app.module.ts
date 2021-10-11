import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path:"customer-info",component:CustomerinfoComponent},
  { path: "product-list", component:ProductslistComponent},
  {path:"product-details/:prodId", component:ProductdetailsComponent},
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"cart", component:CartComponent},
  {path:"order-placed", component:OrderPlacedComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductslistComponent,
    ProductdetailsComponent,
    CustomerinfoComponent,
    CartComponent,
    OrderPlacedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
