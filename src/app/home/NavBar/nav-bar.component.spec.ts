import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoardComponent } from './nav-bar.component';

describe('HomeBoardComponent', () => {
  let component: HomeBoardComponent;
  let fixture: ComponentFixture<HomeBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
