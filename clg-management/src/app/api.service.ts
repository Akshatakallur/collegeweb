import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { facultymodel } from './faculty-details/faculty';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addnote(data:facultymodel){
  return this.http.post<facultymodel>("http://localhost:3000/posts",data)
  }
  getnote(){
    return this.http.get<facultymodel[]>("http://localhost:3000/posts");
  }
  fetchdata(id:number){
    return this.http.get<facultymodel>("http://localhost:3000/posts/"+id);
  }
  updatenote(data:facultymodel,id:number){
    return this.http.put<facultymodel>("http://localhost:3000/posts/"+id,data);
  }
  deletenote(id:number){
    return this.http.delete<facultymodel>("http://localhost:3000/posts/"+id);
  }
}