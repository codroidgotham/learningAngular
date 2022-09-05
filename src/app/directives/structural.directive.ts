import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {

  constructor(private tf:TemplateRef<any>,private pc:ViewContainerRef) { 
    
  }



  @Input()
  set appStructural(cond: boolean){
    console.log(cond)
    if (!cond){
      
      this.pc.createEmbeddedView(this.tf);
    }else{
      
      this.pc.clear();
    };
  }

}
