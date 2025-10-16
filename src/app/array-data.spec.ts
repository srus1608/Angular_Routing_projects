import { TestBed } from '@angular/core/testing';

import { ArrayData } from './array-data';

describe('ArrayData', () => {
  let service: ArrayData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
