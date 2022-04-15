import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonjiElementComponent } from './donji-element.component';

describe('DonjiElementComponent', () => {
  let component: DonjiElementComponent;
  let fixture: ComponentFixture<DonjiElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonjiElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonjiElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
