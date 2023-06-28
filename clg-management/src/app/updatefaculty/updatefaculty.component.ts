import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { facultymodel } from '../faculty-details/faculty';

@Component({
  selector: 'app-updatefaculty',
  templateUrl: './updatefaculty.component.html',
  styleUrls: ['./updatefaculty.component.css']
})
export class UpdatefacultyComponent implements OnInit{

  public dataid!:number;
  public note!:facultymodel
  constructor(private activatedroute:ActivatedRoute,private router:Router,private api:ApiService){}
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param:Params)=>{
      this.dataid=param['get']("id")
      
    })
    this.api.fetchdata(this.dataid).subscribe((data:facultymodel)=>{
      this.note = data;
          })
}
updatenote(){
  this.api.updatenote(this.note,this.dataid).subscribe((res:facultymodel)=>{
      this.router.navigate(['/'])
  })
  }}