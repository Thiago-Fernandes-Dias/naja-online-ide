import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeContainerComponent } from './code-container.component';

describe('CodeContainerComponent', () => {
  let component: CodeContainerComponent;
  let fixture: ComponentFixture<CodeContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeContainerComponent]
    });
    fixture = TestBed.createComponent(CodeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
