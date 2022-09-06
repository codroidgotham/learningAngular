import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {

  constructor(private http:HttpClient) {
    
   }

   getfromApi(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
   }


}
