import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
// Testing import providers for router.
import {appRouterProviders} from './app.routes'


@NgModule({
  imports: [BrowserModule, FormsModule] ,
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [appRouterProviders] // Importing providers fixed RC4 -> RC5 migration bugs.
})
export class AppModule { }
