import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { ResumeComponent } from './components/resume/resume.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path: 'resume-component', component: ResumeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbNav
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
