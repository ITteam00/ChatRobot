import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPracticeComponent } from './input-practice.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('InputPracticeComponent', () => {
  let component: InputPracticeComponent;
  let fixture: ComponentFixture<InputPracticeComponent>;
  let httpTestingController:HttpTestingController


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [InputPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPracticeComponent);
    httpTestingController = TestBed.inject(HttpTestingController);  
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
