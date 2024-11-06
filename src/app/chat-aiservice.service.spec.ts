import { TestBed } from '@angular/core/testing';

import { ChatAIServiceService } from './chat-aiservice.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('ChatAIServiceService', () => {
  let service: ChatAIServiceService;
  let httpTestingController:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChatAIServiceService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });    
    service = TestBed.inject(ChatAIServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);  
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should fetch todos', () => {
    service.generateContent("Hello").subscribe();
    const req = httpTestingController.expectOne('/api/v1/services/aigc/text-generation/generation');
    expect(req.request.method).equal('POST');
  });
});
