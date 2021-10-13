import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerinfoComponent } from './customerinfo.component';

describe('CustomerinfoComponent', () => {
    let component: CustomerinfoComponent;
    let fixture: ComponentFixture<CustomerinfoComponent>;
    let de = DebugElement
    let he= HTMLElement
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([]),BrowserModule, FormsModule, ReactiveFormsModule],
            declarations: [CustomerinfoComponent],
            providers:[HttpClient]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerinfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('form')).nativeElement

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('form should be invalid',()=>{
        component.detailsForm.controls['name'].setValue('')
        component.detailsForm.controls['pincode'].setValue('')
        component.detailsForm.controls['mobile'].setValue('')
        expect(component.detailsForm.valid).toBeFalsy
    });
    
});