import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexShowcaseComponent } from './pokedex-showcase.component';

describe('PokedexShowcaseComponent', () => {
  let component: PokedexShowcaseComponent;
  let fixture: ComponentFixture<PokedexShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
