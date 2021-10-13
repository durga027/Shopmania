import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';

import { ProductslistComponent } from './productslist.component';

describe('ProductslistComponent', () => {
    let component: ProductslistComponent;
    let fixture: ComponentFixture<ProductslistComponent>;
    let httpMock: HttpTestingController;
    let testService: ProductsService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([]),],
            declarations: [ProductslistComponent],
            providers:[HttpClient, ProductsService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductslistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        testService = TestBed.get(ProductsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

      it('should call getAllProducts', inject([ProductsService], fakeAsync((service: ProductsService) => {
    
        service.getAllProducts();
        let req = httpMock.expectOne("http://localhost:8080/products");
    
        expect(req.request.url).toBe("http://localhost:8080/products");
        expect(req.request.body).toEqual(null);
    
        req.flush({});
        httpMock.verify();
        tick();
    
    })));

});

