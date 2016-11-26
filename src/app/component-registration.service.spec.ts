/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComponentRegistrationService } from './component-registration.service';

describe('ComponentRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentRegistrationService]
    });
  });

  it('should ...', inject([ComponentRegistrationService], (service: ComponentRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
