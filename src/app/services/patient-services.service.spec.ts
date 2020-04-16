import { TestBed } from '@angular/core/testing';

import { PatientServicesService } from './patient-services.service';

describe('PatientServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientServicesService = TestBed.get(PatientServicesService);
    expect(service).toBeTruthy();
  });
});
