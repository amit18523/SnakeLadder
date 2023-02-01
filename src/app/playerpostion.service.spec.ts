import { TestBed } from '@angular/core/testing';

import { PlayerpostionService } from './playerpostion.service';

describe('PlayerpostionService', () => {
  let service: PlayerpostionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerpostionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
