import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentRegistrationService } from './component-registration.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'baz', loadChildren: 'app/baz/baz.module#BazModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ComponentRegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
