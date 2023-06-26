import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListModel } from './fees';
import { FeeServiceservice } from '../feeservice.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  listValue!: FormGroup;
  listModelObject!: ListModel;
  listData:undefined| ListModel[];
  showadd!: boolean;
  showupdate!: boolean;

  constructor(private formbuilder: FormBuilder, private api: FeeServiceservice) { }
  ngOnInit(): void {
    this.listValue = this.formbuilder.group({
      id:['',Validators.required],
      studentname:['',Validators.required],
      studentid:['',Validators.required],
      course:['',Validators.required],
      totalfees:['',Validators.required],    
      feespaid:['',Validators.required],
      pendingfees:['',Validators.required],
  
     });

     this.getlist();
    this.listValue = this.formbuilder.group({
      id:[''],
      studentname: [''],
      studentid: [''],
      course: [''],
      totalfees: [''],
      feespaid: [''],
      pendingfees:['']
    });
    this.getlist();
  }

  postlist(listData:ListModel){
    this.api.postlist(listData).subscribe((res => {
      this.listValue.reset();
    }))
    this.getlist();
    alert("added succesfully")
  }



  onclickpostbabyDetails(){
    this.listValue.reset();
    this.showadd=true;
    this.showupdate=false;
  }
  getlist() {
    this.api.getlist().subscribe(res => {
      this.listData = res;
    })
  }
  deletelist(list: any) {
    this.api.deletelist(list.id)
      .subscribe(res => {
        alert("Baby Info Deleted");
        this.getlist();
      })
  }
onEdit(row:any){
  this.listModelObject.id = row.id;
  this.listValue.controls['id'].setValue(row.id);
    this.listValue.controls['studentname'].setValue(row.studentname);
    this.listValue.controls['studentid'].setValue(row.studentid);
    this.listValue.controls['course'].setValue(row.course);
    this.listValue.controls['totalfees'].setValue(row.totalfees);
    this.listValue.controls['feespaid'].setValue(row.feespaid);
    this.listValue.controls['pendingfees'].setValue(row.pendingfees);
  this.showadd=false;
  this.showupdate=true;
}

updatelist() {
    this.listModelObject.id = this.listValue.value.id;
    this.listModelObject.studentname = this.listValue.value.studentname;
    this.listModelObject.studentid = this.listValue.value.studentid;
    this.listModelObject.course = this.listValue.value.course;
    this.listModelObject.totalfees = this.listValue.value.totalfees;
    this.listModelObject.feespaid = this.listValue.value.feespaid;
    this.listModelObject.pendingfees = this.listValue.value.pendingfees;

    this.api.updatelist(this.listModelObject, this.listModelObject.id)
      .subscribe(res => {
        alert("Updated succesfully");
      })
    this.getlist();
    }
  }


// searchlist(event:any ) {
//   if(event.target.value) {
//     this.api.searchlist(event.target.value).subscribe(res => {
//       this.listData = res;
//     })
//   } else{
//     this.getlist()
//   }
// }


