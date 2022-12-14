import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, TemplateRef, Output,EventEmitter, AfterContentInit,ChangeDetectionStrategy } from '@angular/core';

import { Course } from '../course';
import { Observable } from 'rxjs';
import { Dummy } from '../dummy';
import { HighlightedDirective } from '../directives/highlighted.directive';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent implements OnInit, AfterViewInit,AfterContentInit {
  
  @ViewChild('topcontainer')
  topc?:ElementRef;

  @ViewChild(HighlightedDirective)
  highlighter?:HighlightedDirective

  @ViewChild('para')
  divh?:ElementRef


  @Output()
  cardiac=new EventEmitter();

  @Input()
  course:any;

  @Input()
  divheight?:number;

  @Input()
  tmplref?:TemplateRef<any> | null

  innerdivheight:any;
  startDate:Date;
  price:number;
  constructor() {
    console.log(this.topc)
    this.startDate=new Date();
    this.price=9.99;
    
  }
  myClassFun(){
    if (this.course.category=="BEGINNER")
    {return 'myclass';}
    return {'card':true};
  }
  checkHeight(){
    return 'moreheight'
  }
  ngOnInit(): void {
    
  }
  giveStyle(){
    if (this.course.category=="BEGINNER"){
      return {'text-decoration':'underline'};
    }
    return {'text-decoration':'none'};
  }
  ngAfterContentInit(){
    
  }
  ngAfterViewInit() {
    
    this.innerdivheight=this.divh?.nativeElement.offsetHeight;
    
  }
  myfunc(val:boolean){
    console.log(val);
  }
  myfunc2(course1:Course){
    console.log(course1);
  }
  changeTitle(val:string){
    console.log(val)
    this.course.description=val;
  }
  changedesc(){
    console.log("i got here")
    
    this.course.description="myvalue";
  }
}
