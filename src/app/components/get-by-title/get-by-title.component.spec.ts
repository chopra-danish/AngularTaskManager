import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByTitleComponent } from './get-by-title.component';

describe('GetByTitleComponent', () => {
  let component: GetByTitleComponent;
  let fixture: ComponentFixture<GetByTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
