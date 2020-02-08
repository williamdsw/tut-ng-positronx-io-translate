import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateExampleComponent } from './translate-example.component';

describe('TranslateExampleComponent', () => {
  let component: TranslateExampleComponent;
  let fixture: ComponentFixture<TranslateExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
