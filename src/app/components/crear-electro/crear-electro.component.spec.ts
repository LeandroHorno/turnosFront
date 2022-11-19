import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearElectroComponent } from './crear-electro.component';

describe('CrearElectroComponent', () => {
  let component: CrearElectroComponent;
  let fixture: ComponentFixture<CrearElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearElectroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
