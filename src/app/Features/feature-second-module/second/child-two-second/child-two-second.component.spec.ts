import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoSecondComponent } from './child-two-second.component';

describe('ChildTwoSecondComponent', () => {
  let component: ChildTwoSecondComponent;
  let fixture: ComponentFixture<ChildTwoSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTwoSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTwoSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
