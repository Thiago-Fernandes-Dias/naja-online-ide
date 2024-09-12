import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompileBtnComponent } from './compile-btn.component';

describe('CompileBtnComponent', () => {
  let component: CompileBtnComponent;
  let fixture: ComponentFixture<CompileBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompileBtnComponent]
    });
    fixture = TestBed.createComponent(CompileBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
