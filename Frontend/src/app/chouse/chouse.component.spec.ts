import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChouseComponent } from './chouse.component';

describe('ChouseComponent', () => {
  let component: ChouseComponent;
  let fixture: ComponentFixture<ChouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
