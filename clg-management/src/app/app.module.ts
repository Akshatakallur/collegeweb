import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdmissionComponent } from './admission/admission.component';
import { HomeComponent } from './home/home.component';
import { FeesComponent } from './fees/fees.component';
import { CourseComponent } from './course/course.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeTableComponent } from './time-table/time-table.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatefacultyComponent } from './updatefaculty/updatefaculty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdmissionComponent,
    HomeComponent,
    FeesComponent,
    CourseComponent,
    FacultyDetailsComponent,
    TimeTableComponent,
    FeedbackComponent,
    AttendenceComponent,
    UpdatefacultyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
