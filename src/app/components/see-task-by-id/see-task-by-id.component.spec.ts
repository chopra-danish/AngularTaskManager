import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTaskByIdComponent } from './see-task-by-id.component';

describe('SeeTaskByIdComponent', () => {
  let component: SeeTaskByIdComponent;
  let fixture: ComponentFixture<SeeTaskByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeTaskByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeTaskByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
