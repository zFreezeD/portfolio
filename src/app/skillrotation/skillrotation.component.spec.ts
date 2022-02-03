import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillrotationComponent } from './skillrotation.component';

describe('SkillrotationComponent', () => {
  let component: SkillrotationComponent;
  let fixture: ComponentFixture<SkillrotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillrotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillrotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
