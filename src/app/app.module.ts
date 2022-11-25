import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
import { Changecase } from './pipe/changecase.pipe';
import { IncrementCounter } from './directives/counter.directive';
import { Testservice } from './services/test.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TemplateDrivenForm,
    Changecase,
    IncrementCounter,
  ],
  providers: [Testservice],
  bootstrap: [AppComponent],
})
export class AppModule {}
