import { Directive,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appHeight]'
})
export class HeightDirective {
  @Input('appHeight')
  myheight=96;

  constructor() { }

@HostBinding('style.min-height')
  get cssClasses(){
    return this.myheight;
    
  }

}
