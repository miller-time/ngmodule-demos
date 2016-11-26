import { Component, OnInit } from '@angular/core';
import { FooService } from './foo/foo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
    private fooService: FooService
  ) { }

  ngOnInit() {
    this.fooService.foo();
  }
}
