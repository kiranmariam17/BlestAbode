import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhouseComponent } from './lhouse.component';

describe('LhouseComponent', () => {
  let component: LhouseComponent;
  let fixture: ComponentFixture<LhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
