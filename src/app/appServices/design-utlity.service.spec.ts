import { TestBed } from '@angular/core/testing';

import { DesignUtlityService } from './design-utlity.service';

describe('DesignUtlityService', () => {
  let service: DesignUtlityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignUtlityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
