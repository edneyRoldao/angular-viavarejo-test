import {Directive, HostListener} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
  selector: '[appMascaraTelefone]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MascaraTelefoneDirective,
    multi: true
  }]
})
export class MascaraTelefoneDirective implements ControlValueAccessor {
  onTouched: any;
  onChange: any;

  writeValue(value: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
  }



}
