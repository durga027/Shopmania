import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { Product } from './product';
import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ProductsService', () => {
  let product =new Product("Name1",220.0,"desc","category",2)
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService, HttpClient]
    });
  });

  it('should be created', inject([ProductsService],
     (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
  it('getAll products', inject([ProductsService],
    (service: ProductsService) => {
   expect(service.getAllProducts()).toBeDefined
 }));
});