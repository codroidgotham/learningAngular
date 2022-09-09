import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, InjectionToken, OnInit, QueryList, ViewChildren,Inject, ChangeDetectionStrategy } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { COURSES } from 'src/db-data';
import { User } from './interfaces/user';
import { Dummy } from './dummy';
import { CardComponent } from './card/card.component';
import { Course } from './course';
import { CoursesServiceService } from './services/courses-service.service';


const injTok=new InjectionToken<CoursesServiceService>("my token");
const factoryMethod=(http:HttpClient)=>{
  return new CoursesServiceService(http);
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush

})
export class AppComponent implements AfterViewInit, OnInit {
  checker:string="initial string"
  haveGot:any;
  @ViewChildren(CardComponent)
  cards: QueryList<CardComponent>;
  heights = new Array<any>();
  maxheight = 56;
  title = 'myapp1';
  arrCourses = COURSES as Course[];
  //constructor
  constructor(private cs: CoursesServiceService) {
    this.cards = new QueryList<CardComponent>();
    this.haveGot=[];
    this.cs.getfromApi().subscribe(
     
      // (value)=>{for (let v of value){
        
      //   this.haveGot.push(v );
      // }}
      (value)=>
      {
        for (let i=0;i<value.length;i++){
          this.haveGot.push(value[i]);
        }
      }
      //this.haveGot=value
    )
    console.log("immediate",this.haveGot.length);
    setTimeout(()=>console.log("wait",this.haveGot.length),3000)  
    

  }


  ngAfterViewInit() {


    for (let i = 0; i < this.arrCourses.length; i++) {

      this.heights.push(this.cards.get(i)?.innerdivheight);
    }
    this.maxheight = Math.max(...this.heights)
    this.cards?.changes.subscribe(
      (cards1) => console.log(cards1)
    )

  }
  addCourse(val: string) {
    const mycourse: Course = {
      id: 1,
      description: val,
      iconUrl: "https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png",
      longDescription: this.arrCourses[0].longDescription,
      category: this.arrCourses[0].category,
      lessonsCount: 22,

    }
    this.arrCourses.push(mycourse);
  }
  ngOnInit(): void {
    console.log(this.haveGot)
  }
changeto(){
  this.checker="newval";
}
}
