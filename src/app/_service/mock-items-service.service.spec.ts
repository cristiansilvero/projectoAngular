import { TestBed } from '@angular/core/testing';

import { MockItemsServiceService } from './mock-items-service.service';

describe('MockItemsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockItemsServiceService = TestBed.get(MockItemsServiceService);
    expect(service).toBeTruthy();
  });
});
