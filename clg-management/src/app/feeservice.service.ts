import { Injectable } from '@angular/core';
import { ListModel } from './fees/fees';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeeServiceservice {
  searchlist(value: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }
  baseurl: string = "http://localhost:3000/fees"

  
  
  postlist(data:any){
    return this.http.post<ListModel>(this.baseurl,data)
  }
  getlist() {
    return this.http.get<ListModel[]>(this.baseurl)
  }  
  deletelist(id: number) {
    return this.http.delete<ListModel>(this.baseurl + '/' + id)
  }
  updatelist(data: any, id: number) {
    return this.http.put<ListModel>(this.baseurl + '/' + id, data)
      
  }

}

//  searchlist(studentname: string){
//      return this.http.get<ListModel[]>(`${this.baseurl}?studentname=${studentname}`);
// }
