import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiradosPorZonaComponent } from './girados-por-zona.component';

describe('GiradosPorZonaComponent', () => {
  let component: GiradosPorZonaComponent;
  let fixture: ComponentFixture<GiradosPorZonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiradosPorZonaComponent]
    });
    fixture = TestBed.createComponent(GiradosPorZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
