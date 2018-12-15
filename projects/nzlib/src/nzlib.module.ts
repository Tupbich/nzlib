import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { NgZorroAntdModule, NZ_I18N, ru_RU } from './components/ng-zorro-antd.module';
import { NumericDirective } from './directives/numeric.directive';

ru_RU.DatePicker.lang.dateFormat = 'dd.MM.yyyy';
ru_RU.DatePicker.lang.dateTimeFormat = 'dd.MM.yyyy HH:mm';

registerLocaleData(ru);

const modules = [
  BrowserModule,
  NgZorroAntdModule,
  FormsModule,
  HttpClientModule,
  BrowserAnimationsModule
];

const directives = [
  NumericDirective
];

@NgModule({
  imports: [...modules],
  declarations: [...directives],
  exports: [...modules, ...directives],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }]
})

export class NzlibModule { }
