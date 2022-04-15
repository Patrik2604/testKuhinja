import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GornjiElementComponent } from './gornji-element.component';

describe('GornjiElementComponent', () => {
  let component: GornjiElementComponent;
  let fixture: ComponentFixture<GornjiElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GornjiElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GornjiElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
