// import { Component, OnInit, ViewChild } from '@aimport { AppointmentService } from '../services/appointment.service';
import { AppointmentService } from '../services/appointment.service';
// lar/core';

import { Component, OnInit, Input } from '@angular/core';

import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {


  appointmentList = [
    {
      name: 'Ayushi',
      email: 'ayushiver@gmail.com',
      appointment: '20-12-2021, 5:30PM',
      details: 'Assigned to Dr. V Gupta',
      mode: 'Audio'
    },
    {
      name: 'John',
      email: 'john@outlook.com',
      appointment: '14-02-2022, 5:30PM',
      details: 'Assigned to Dr. Seema',
      mode: 'Audio'
    },
    {
      name: 'Praveen',
      email: 'praveen584@gmail.com',
      appointment: '07-12-2021, 5:30PM',
      details: 'Assigned to Dr. Harry',
      mode: 'Video'
    },
    {
      name: 'Gaurav',
      email: 'gauarvBitspilani@gmail.com',
      appointment: '20-11-2021, 5:30PM',
      details: 'Assigned to Dr. Srinavas',
      mode: 'Audio'
    },
    {
      name: 'Nidhi',
      email: 'nidhiBits@gmail.com',
      appointment: '15-11-2021, 5:30PM',
      details: 'Assigned to Dr. Geetam',
      mode: 'Video'
    },
    {
      name: 'Carry',
      email: 'randomGuy@gmail.com',
      appointment: '19-11-2021, 5:30PM',
      details: 'Assigned to Dr. David',
      mode: 'Audio'
    },
  ];



  constructor(
    private appointmentSerive : AppointmentService
    ){}

  ngOnInit(): void {

   this.appointmentList = this.appointmentSerive.fetchAppointmentList();
  }

}
