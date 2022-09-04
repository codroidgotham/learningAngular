import { viewClassName } from '@angular/compiler';
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs: "hl"
})
export class HighlightedDirective {
@Input('appHighlighted')
ishighlighted=false;
  constructor() { }
@Output()
myevent=new EventEmitter();

@Output()
togglehighlight= new EventEmitter()

  @HostBinding('style.border')
  get cssClasses(){
    return this.ishighlighted?"5px solid green":"none";
    
  }

  @HostListener('mouseover')
  mouseOver(){
    this.ishighlighted=true;
    this.myevent.emit(this.ishighlighted);
  }

  @HostListener('mouseout')
  onMouseLeave(){
    this.ishighlighted=false;
    this.myevent.emit(this.ishighlighted);
    
  }
  @HostListener('cardiac')
  ontoggle(){
    this.ishighlighted=!this.ishighlighted;
    this.togglehighlight.emit(this.ishighlighted);
  }
}
