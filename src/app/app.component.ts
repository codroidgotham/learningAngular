import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { COURSES } from 'src/db-data';
import { Dummy } from './dummy';
import { CardComponent } from './card/card.component';
import { Course } from './course';
import { CoursesServiceService } from './services/courses-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements  AfterViewInit,OnInit {

  
  @ViewChildren(CardComponent)
  cards:QueryList<CardComponent>; 
  heights=new Array<any>();
  maxheight=56;
  title = 'myapp1';
  arrCourses=COURSES as Course[];
  constructor(private http:HttpClient,private cs:CoursesServiceService) {
    this.cards=new QueryList<CardComponent>();
  }
  ngAfterViewInit() {
    console.log(this.cards.length)
    
    for (let i=0;i<this.arrCourses.length;i++){
    console.log(this.cards.get(i)?.innerdivheight)
    this.heights.push(this.cards.get(i)?.innerdivheight);
     }
    this.maxheight=Math.max(...this.heights)
    this.cards?.changes.subscribe(
      (cards1)=>console.log(cards1)
    )
    console.log("here"+this.maxheight)
  }
  addCourse(val:string){
    const mycourse:Course={
      id:1,
    description:val,
    iconUrl: "https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png",
    longDescription: this.arrCourses[0].longDescription,
    category:this.arrCourses[0].category,
    lessonsCount:22,
      
    }
    this.arrCourses.push(mycourse);
  }
  ngOnInit(): void {
    console.log("here",this.cs)
  }

}
