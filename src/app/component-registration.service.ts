import { Injectable } from '@angular/core';

@Injectable()
export class ComponentRegistrationService {
  private components: string[] = [];

  register(name: string) {
    this.components.push(name);
  }

  list() {
    return this.components;
  }
}
