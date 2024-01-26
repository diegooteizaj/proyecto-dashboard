import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaTiempoTramoBajoComponent } from './linea-tiempo-tramo-bajo.component';

describe('LineaTiempoTramoBajoComponent', () => {
  let component: LineaTiempoTramoBajoComponent;
  let fixture: ComponentFixture<LineaTiempoTramoBajoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineaTiempoTramoBajoComponent]
    });
    fixture = TestBed.createComponent(LineaTiempoTramoBajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
