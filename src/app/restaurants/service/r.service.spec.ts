import { TestBed } from '@angular/core/testing';

import { RService } from './r.service';

describe('RService', () => {
  let service: RService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
