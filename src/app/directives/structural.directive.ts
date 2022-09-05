import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})

export class StructuralDirective {
visible=false;
  constructor(private tf:TemplateRef<any>,private pc:ViewContainerRef) { 
    
  }



  @Input()
  set appStructural(cond: boolean){
    console.log(cond)
    if (!cond && !this.visible){
      
      this.pc.createEmbeddedView(this.tf);
    }else if (this.visible){
      
      this.pc.clear();
    };
  }

}
