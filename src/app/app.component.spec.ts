import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

describe('AppComponent', () => {
  let httpTestingController: HttpTestingController;
  let fixture: any;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [HttpClientModule], // 确保导入 HttpClientModule
    }).compileComponents();

    // Inject HttpTestingController
    httpTestingController = TestBed.inject(HttpTestingController);
    
    // 创建组件实例
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the 'Proctice' title`, () => {
    expect(app.title).toEqual('Proctice');
  });
});