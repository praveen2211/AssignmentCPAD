import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserAppointmentComponent } from './user-appointment/user-appointment.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

const routes: Routes = [
  {path: '', component: UserAppointmentComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'appointment-list', component: AppointmentListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
