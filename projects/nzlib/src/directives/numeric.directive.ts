import { Directive } from '@angular/core';
import Autonumeric from 'autonumeric';

@Directive({
  selector: '[nz-input-numeric]'
})
export class NumericDirective {

  constructor() {
    console.log('numeric init');
   }

}
