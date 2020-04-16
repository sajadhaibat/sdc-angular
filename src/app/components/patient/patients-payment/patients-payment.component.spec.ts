import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsPaymentComponent } from './patients-payment.component';

describe('PatientsPaymentComponent', () => {
  let component: PatientsPaymentComponent;
  let fixture: ComponentFixture<PatientsPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
