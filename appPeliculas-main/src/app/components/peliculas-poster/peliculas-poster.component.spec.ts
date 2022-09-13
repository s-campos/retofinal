import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPosterComponent } from './peliculas-poster.component';

describe('PeliculasPosterComponent', () => {
  let component: PeliculasPosterComponent;
  let fixture: ComponentFixture<PeliculasPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasPosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
