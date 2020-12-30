import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRentaComponent } from './navbar-renta.component';

describe('NavbarRentaComponent', () => {
  let component: NavbarRentaComponent;
  let fixture: ComponentFixture<NavbarRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarRentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
