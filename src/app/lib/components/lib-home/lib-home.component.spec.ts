import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibHomeComponent } from './lib-home.component';

describe('LibHomeComponent', () => {
  let component: LibHomeComponent;
  let fixture: ComponentFixture<LibHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
