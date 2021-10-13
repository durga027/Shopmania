import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { CartComponent } from './cart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CartComponent', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([]),],
            declarations: [CartComponent],
            providers:[HttpClient]
           
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('cart empty', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.topMargin')?.textContent).toContain('Your cart is empty!! Add something to make me happy..');
    });

});