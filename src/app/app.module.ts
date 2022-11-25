import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
import { Changecase } from './pipe/changecase.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, TemplateDrivenForm, Changecase],
  bootstrap: [AppComponent],
})
export class AppModule {}
