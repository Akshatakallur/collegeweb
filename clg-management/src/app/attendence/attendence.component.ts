import { Component } from '@angular/core';
import { listserviceService } from '../listservice.service';
import { BabyModel } from '../admission/admission';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { babyvaccinemodel } from './attendence';
import { AttendenceserviceService } from '../attendenceservice.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent {
   
    BabyData!:BabyModel[];
    
    bformValue!:FormGroup;
    formValue!:FormGroup;
    babyvaccineform!:FormGroup;
    babyvaccineData:undefined | babyvaccinemodel[]

    constructor(private bapi: listserviceService, private formbuilder: FormBuilder, private bvapi: AttendenceserviceService) { }

    ngOnInit(): void {
      this.babyvaccineform = this.formbuilder.group({
        StudentName: ['', [Validators.required]],
        Status:['',[Validators.required]]
        
        
      })
      this.getbv();

      this.getbaby(this.BabyData);
      
    }
    getbaby(BabyData: any) {
      this.bapi.getbv().subscribe(res => {
        this.BabyData = res;
        console.log(res);
      })
    }
  
    
  
  
    addbv(babyvaccineData: babyvaccinemodel) {
      this.bvapi.addbv(babyvaccineData).subscribe((res => {
        this.babyvaccineform.reset();
      }))
      this.getbv();
      alert("add  list");
      this.babyvaccineform.reset();
      this.getbv();
      
    }
    
    getbv() {
      this.bvapi.getbv().subscribe(res => {
        this.babyvaccineData = res;
        
      })
    }
    
    deletebv(babyvaccineData: any) {
      this.bvapi.deletebv(babyvaccineData.id)
      .subscribe(res => {
        this.getbv();
      })
      alert("delete ");
    }
  }