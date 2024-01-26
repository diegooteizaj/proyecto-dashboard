import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspesoresMinimosComponent } from './espesores-minimos.component';

describe('EspesoresMinimosComponent', () => {
  let component: EspesoresMinimosComponent;
  let fixture: ComponentFixture<EspesoresMinimosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspesoresMinimosComponent]
    });
    fixture = TestBed.createComponent(EspesoresMinimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
