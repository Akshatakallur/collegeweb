import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdmissionComponent } from './admission/admission.component';
import { FeesComponent } from './fees/fees.component';
import { CourseComponent } from './course/course.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { FeedbackComponent } from './feedback/feedback.component';
const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'admission',component:AdmissionComponent},
  {path:'fees',component:FeesComponent},
  {path:'course',component:CourseComponent},
  {path:'attendence',component:AttendenceComponent},
  {path:'faculty',component:FacultyDetailsComponent},
  {path:'timetable',component:TimeTableComponent},
  {path:'feedback',component:FeedbackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
