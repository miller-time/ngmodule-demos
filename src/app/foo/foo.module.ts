import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooComponent } from './foo.component';
import { FooService } from './foo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooComponent
  ],
  exports: [
    FooComponent
  ],
  providers: [
    FooService
  ]
})
export class FooModule { }
