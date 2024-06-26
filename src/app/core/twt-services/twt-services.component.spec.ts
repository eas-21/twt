import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwtServicesComponent } from './twt-services.component';

describe('TwtServicesComponent', () => {
  let component: TwtServicesComponent;
  let fixture: ComponentFixture<TwtServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwtServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwtServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
