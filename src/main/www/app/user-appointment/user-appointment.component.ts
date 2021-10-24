import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {FileUploader} from 'ng2-file-upload';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-user-appointment',
  templateUrl: './user-appointment.component.html',
  styleUrls: ['./user-appointment.component.scss']
})
export class UserAppointmentComponent implements OnInit {


  /**
   * Input data
   */
  @Input() inputData: any;

  showAlert = false;


  genders=['male','female'];

  date = new Date();

  time = {hour: 13, minute: 30};

  mode = '';

  url = 'https://evening-anchorage-3159.herokuapp.com/api/';

  uploader = new FileUploader({
    url: this.url,
    maxFileSize: 1024 * 1024 * 1
    });


  
  /**
   *  Form
   */
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
    // private typeChecking: TypeChecking
  ) { }

  ngOnInit() {


    this.setValues();
    this.onFormChange();
    this.onFormStatusChange();
  }


  setValues() {

    const d = this.inputData;
  
    this.form = this.fb.group({
      name: [ '', [
        Validators.required,
      ]],
      phoneNo: [this.inputData ? this.inputData.phoneNo : '', [
        Validators.maxLength(30),
        Validators.required
      ]],
      email: [this.inputData ? this.inputData.email : '', [
        Validators.maxLength(30),
        Validators.required
      ]],
      age: [this.inputData ? this.inputData.age : '', [
        Validators.required
      ]],
      gender: [this.inputData ? this.inputData.gender : '', [
        Validators.required
      ]],
      city: [this.inputData ? this.inputData.city : '', [
        Validators.required
      ]],
      state: [this.inputData ? this.inputData.state : '', [
        Validators.required
      ]],
      typeOfIllness: [this.inputData ? this.inputData.typeOfIllness : '', [
        Validators.required
      ]],
      sympytoms: [this.inputData ? this.inputData.sympytoms : '', [
        Validators.required
      ]],
      description: [this.inputData ? this.inputData.description : '', [
        Validators.required
      ]],
      date: [this.date ? this.date : '', [
        Validators.required
      ]],

      time: [this.time ? this.time : '', [
        Validators.required
      ]],

      // gender: [this.inputData ? this.inputData.link : '', [
      //   Validators.required,
      // ]],
     
    });

    // Set tracking data
    // this.tracking = this.inputData ? this.inputData.tracking : {};


    this.uploader.onAfterAddingFile = (file) => {
      console.log('***** onAfterAddingFile ******')
      console.log('file ', file)
    }

    this.uploader.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };

    this.uploader.onCompleteAll = () => {
      console.log('******* onCompleteAll *********')
    }

    this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
      console.log('***** onWhenAddingFileFailed ********')
    }

  }


  private onFormStatusChange() {
    this.form.statusChanges.subscribe(res => {
      // Emit the component's valid or invalid boolean value
      // this.isComponentsValid.emit(!this.form.invalid);
    });
  }

  /**
   * Emit values when form value changes
   */
  private onFormChange() {
    this.form.valueChanges.subscribe(res => {

      // if (this.tracking) {
      //   res =  Object.assign(res, {tracking : this.tracking});
      // }

      // this.inputDataChange.emit(res);
    });

    this.form.statusChanges.subscribe(res => {
      // Emit the component's valid or invalid boolean value
      // this.isComponentsValid.emit(!this.form.invalid);
    });
  }

  /**
   * Form controls getter
   */
  get f() {
    return this.form.controls;
  }

  /**
   * Toggle button
   */
  toggleButton() {
    // this.isToggleBtnOpen = !this.isToggleBtnOpen;
    // this.isAnyWidgetOpen.emit( {isComponentOpen: this.isToggleBtnOpen});
  }

  /**
   * Get button color
   * @param event any
   */
  getButtonColorValue(event: any) {
    this.form.patchValue({
      color: {
        button: event
      }
    });
  }

  /**
   * Get button text color
   * @param event any
   */
  getButtonTextColorValue(event: any) {
    this.form.patchValue({
      color: {
        label: event
      }
    });
  }

  /*
  *  Below Function(s) are used to set the values of Colors in Text, Border and Button respectively
  * */
  setButtonColorValue() {
    // @ts-ignore
    return this.form.controls.color.controls.button.value;
  }

  setButtonBorderColorValue() {
    // @ts-ignore
    return this.form.controls.color.controls.border.value;
  }

  setButtonTextColorValue() {
    // @ts-ignore
    return this.form.controls.color.controls.label.value;
  }

  /**
   * Get button text color
   * @param event any
   */
  getButtonBorderColorValue(event: any) {
    this.form.patchValue({
      color: {
        border: event
      }
    });
  }

  /**
   * Emit when component is deleted
   * @param val string
   */
  deleteElement(val: string) {
    // this.deleteEvent.emit(val);
    // this.isAnyWidgetOpen.emit( {isComponentOpen: !this.isToggleBtnOpen});
    // this.isComponentsValid.emit(true);
  }

  /**
   * Mark all form fields as touched.
   * Check status
   * Return boolean true if form status is VALID
   */
  public finalCheckComponent() {
    this.form.markAllAsTouched();
    return this.form.status === 'VALID';
  }

  /**
   * function used for appending protocol in URL (if missing)
   * @param value: URL Value
   */
  appendURLProtocol(value: string) {
    this.form.patchValue({
      // link:  this.typeChecking.addHttpToURL(value) ? this.typeChecking.addHttpToURL(value) : value
    });
  }

  /**
   * Get Tracking Data
   * @param $event: tracking data
   */
  getTrackingData($event: any) {
    // this.tracking = $event;
  }

  scheduleAppointment(){
    console.log('this.form');
    console.log(this.form);
    console.log(this.date);

    this.showAlert = true;

    alert('Appoinment Scheduled successfully!');


    this.appointmentService.createAppointment(this.form.value).subscribe(res => {
  
      console.log('Values added successfully');
    }, err => {
      console.log(err);
    });
  }

  dateChange(e:any){
   this.form.patchValue({
     date: e
   });
   
  }

  timeChange(e: any){
    this.form.patchValue({
      date: e
    });
  }


}
