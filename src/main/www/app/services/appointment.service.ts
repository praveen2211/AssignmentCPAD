import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl = 'http://localhost:8081';


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
  ]


  constructor(
    // private _httpClientService: HttpClientService,
    private _httpClient: HttpClient,
  ) { }





    fetchAppointmentList(){
      return this.appointmentList;
    }

  createAppointment(data: any) {

    const temp = {
        name: data.name,
        email: data.email,
        appointment: data.date,
        details: 'Assigned to Dr. V Gupta',
        mode: 'Audio'
    };


    this.appointmentList.push(temp);

    const d = {'displayname': data};
    const URL = this.baseUrl + '/'+'addassignment';
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this._httpClient.post<any>(URL, d, config)
            .pipe(map(res => {
      
      if (res.user === true) {
          localStorage.setItem('currentUser', res.user);
          localStorage.setItem('role', res.role);
      }
      return res;
      }),
      err => {
          return err;
      });

  }

}
