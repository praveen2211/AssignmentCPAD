import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

import { UserAppointmentComponent } from './user-appointment/user-appointment.component';
// import {  NO_ERRORS_SCHEMA } from '@angular/compiler';
import {  CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-toggle-switch';
import {FileUploadModule} from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { ModalModule } from 'ngb-modal';


@NgModule({
  declarations: [
    AppComponent,
    UserAppointmentComponent,
    AboutUsComponent,
    FaqsComponent,
    AppointmentListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    NgbModule,
    UiSwitchModule,
    FileUploadModule,
    HttpClientModule,
    ModalModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
