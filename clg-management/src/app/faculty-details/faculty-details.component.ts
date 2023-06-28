import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { facultymodel } from './faculty';


@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit  {

facultyform!: FormGroup;
data:undefined|facultymodel[];
  constructor(private formbuilder: FormBuilder,private api:ApiService) { }
  ngOnInit(): void {
    this.facultyform = this.formbuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      contact: ['', Validators.required],
    })
    this.getnote();
  }
addnote(data:facultymodel){
this.api.addnote(data).subscribe((res=>{
this.facultyform.reset();
}))
this.getnote();
}
getnote(){
  this.api.getnote().subscribe(res=>{
  this.data= res;
  })
  }
  deletenote(item:facultymodel){
    this.api.deletenote(item.id).subscribe(res=>{
      alert("note delete");
      this.getnote();
    })
  } 
}