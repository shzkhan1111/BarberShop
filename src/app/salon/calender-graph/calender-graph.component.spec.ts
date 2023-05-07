import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderGraphComponent } from './calender-graph.component';

describe('CalenderGraphComponent', () => {
  let component: CalenderGraphComponent;
  let fixture: ComponentFixture<CalenderGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
