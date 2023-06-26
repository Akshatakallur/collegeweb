import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class listserviceService {

  constructor(private http:HttpClient) { }

  

  baseurl: string = "http://localhost:3000/lists";


  addbv(data:any){
    return this.http.post<any>(this.baseurl,data)
    
    }
  
  getbv(){
    return this.http.get<any>(this.baseurl)
    
  }
  updatebv(data:any,id:number){
    return this.http.put<any>(this.baseurl + id,data)
   
}
deletebv(id: number) {
  return this.http.delete<any>(this.baseurl + '/' + id)
  
}
fetchData(name: string) {
  return this.http.get<any>(this.baseurl +'?name='+ name);
}
}