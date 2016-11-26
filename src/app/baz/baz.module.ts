import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BazComponent } from './baz.component';

const bazRoutes: Routes = [
  { path: '', component: BazComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bazRoutes)
  ],
  declarations: [
    BazComponent
  ],
  exports: [
    BazComponent
  ]
})
export class BazModule { }
