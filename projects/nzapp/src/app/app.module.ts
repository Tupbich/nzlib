import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NzlibModule } from '../../../nzlib/src/nzlib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NzlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
