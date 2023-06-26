import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listserviceService } from '../listservice.service';
import { BabyModel } from './admission';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  
  bformValue!:FormGroup;
  BabyMOdelObj: BabyModel = new BabyModel();
  BabyData: undefined | BabyModel[];
  showadd!:Boolean;
  showupdate!:Boolean;

  constructor(private formbuilder: FormBuilder, private api: listserviceService) {}
    ngOnInit(): void {
    this.bformValue = this.formbuilder.group({
      id:['',Validators.required],
      StudentName:['',Validators.required],
      dob:['',Validators.required],
      PastSchool:['',Validators.required],
      SslcMarks:['',Validators.required],
      CourseTaken:['',Validators.required],
      mothername:['',Validators.required],    
      fathername:['',Validators.required],
      contact:['',Validators.required],
      address:['',Validators.required],
     });

     this.getbabyDetails();
    this.bformValue = this.formbuilder.group({
      id:[''],
      StudentName: [''],
      dob:[''],
      PastSchool:[''],
      SslcMarks:[''],
      CourseTaken:[''],
      mothername:[''],
      fathername:[''],
      contact:[''],
      address:['']
    });
    this.getbabyDetails();
  }

  postbabyDetails() {
    console.log(this.bformValue.value);
    this.BabyMOdelObj.id = this.bformValue.value.id;
    this.BabyMOdelObj.StudentName = this.bformValue.value.StudentName;
    this.BabyMOdelObj.dob = this.bformValue.value.dob;
    this.BabyMOdelObj.PastSchool = this.bformValue.value.PastSchool;
    this.BabyMOdelObj.SslcMarks = this.bformValue.value.SslcMarks;
    this.BabyMOdelObj.CourseTaken = this.bformValue.value.CourseTaken;
 //   this.BabyMOdelObj.gender = this.formValue.value.gender;
    this.BabyMOdelObj.mothername= this.bformValue.value.mothername;
    this.BabyMOdelObj.fathername= this.bformValue.value.fathername;
    this.BabyMOdelObj.contact= this.bformValue.value.contact;
    this.BabyMOdelObj.address= this.bformValue.value.address;

    this.api.addbv(this.BabyMOdelObj)
      .subscribe(res => {
        console.log(res);
        alert('Student Info Added Succesfully')
        this.bformValue.reset();
        this.getbabyDetails();
      })
  }
  onclickpostbabyDetails(){
    this.bformValue.reset();
    this.showadd=true;
    this.showupdate=false;
  }
  getbabyDetails() {
    this.api.getbv().subscribe(res => {
      this.BabyData = res;
    })
  }
  deletebaby(list: any) {
    this.api.deletebv(list.id)
      .subscribe(res => {
        alert("Student Info Deleted");
        this.getbabyDetails();
      })
  }
onEdit(row:any){
  this.BabyMOdelObj.id=row.id;
  this.bformValue.controls['id'].setValue(row.id);
  this.bformValue.controls['StudentName'].setValue(row.StudentName);
  this.bformValue.controls['dob'].setValue(row.dob);
  this.bformValue.controls['PastSchool'].setValue(row.PastSchool);
  this.bformValue.controls['SslcMarks'].setValue(row.SslcMarks);
  this.bformValue.controls['CourseTaken'].setValue(row.CourseTaken);

//  this.formValue.controls['gender'].setValue(row.gender);
  this.bformValue.controls['mothername'].setValue(row.mothername);
  this.bformValue.controls['fathername'].setValue(row.fathername);
  this.bformValue.controls['contact'].setValue(row.contact);
  this.bformValue.controls['address'].setValue(row.address);
  this.showadd=false;
  this.showupdate=true;

}
updatebabyDetails(){
  console.log(this.bformValue.value);
  this.BabyMOdelObj.id = this.bformValue.value.id;
  this.BabyMOdelObj.StudentName = this.bformValue.value.StudentName;
  this.BabyMOdelObj.dob = this.bformValue.value.dob;
  this.BabyMOdelObj.PastSchool = this.bformValue.value.PastSchool;
  this.BabyMOdelObj.SslcMarks = this.bformValue.value.SslcMarks;
  this.BabyMOdelObj.CourseTaken = this.bformValue.value.CourseTaken;

//   this.BabyMOdelObj.gender = this.formValue.value.gender;
  this.BabyMOdelObj.mothername= this.bformValue.value.mothername;
  this.BabyMOdelObj.fathername= this.bformValue.value.fathername;
  this.BabyMOdelObj.contact= this.bformValue.value.contact;
  this.BabyMOdelObj.address= this.bformValue.value.address;

    this.api.updatebv(this.BabyMOdelObj,this.BabyMOdelObj.id)
      .subscribe(res => {
        console.log(res);
        let ref=document.getElementById('cancel')
        ref?.click();
        alert('Student Info updated Succesfully')
        this.bformValue.reset();
        this.getbabyDetails();
      })
}
  }