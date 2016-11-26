import { Component, OnInit } from '@angular/core';
import { ComponentRegistrationService } from '../component-registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  components: string[] = [];

  constructor(
    private compReg: ComponentRegistrationService
  ) { }

  ngOnInit() {
    this.compReg.register('home');
    this.components = this.compReg.list();
  }
}
