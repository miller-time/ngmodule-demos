import { Component, OnInit } from '@angular/core';
import { ComponentRegistrationService } from '../component-registration.service';

@Component({
  selector: 'app-baz',
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.css']
})
export class BazComponent implements OnInit {
  components: string[]

  constructor(
    private compReg: ComponentRegistrationService
  ) { }

  ngOnInit() {
    this.compReg.register('baz');
    this.components = this.compReg.list();
  }
}
