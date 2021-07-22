import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourentalComponent } from './yourental.component';

describe('YourentalComponent', () => {
  let component: YourentalComponent;
  let fixture: ComponentFixture<YourentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
