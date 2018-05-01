import { TestBed, inject } from '@angular/core/testing';

import { AuthInterceptorsService } from './auth-interceptors.service';

describe('AuthInterceptorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthInterceptorsService]
    });
  });

  it('should be created', inject([AuthInterceptorsService], (service: AuthInterceptorsService) => {
    expect(service).toBeTruthy();
  }));
});
