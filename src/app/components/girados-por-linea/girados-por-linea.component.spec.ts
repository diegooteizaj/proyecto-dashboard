import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiradosPorLineaComponent } from './girados-por-linea.component';

describe('GiradosPorLineaComponent', () => {
  let component: GiradosPorLineaComponent;
  let fixture: ComponentFixture<GiradosPorLineaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiradosPorLineaComponent]
    });
    fixture = TestBed.createComponent(GiradosPorLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
