import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userSelectedGuard } from './user-selected.guard';

describe('userSelectedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userSelectedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
