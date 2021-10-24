package com.cpad.domain;

public class PatientDetails {

    String patientName;
    String emailAddress;
    long phoneNumber;
    int age;
    String gender;
    String city;
    String State;
    String typeOfIllness;
    String symptoms;
    String description;
    String appointmentDate;
    String appointmentTime;
    String modeOfAppointment;
    String medicalHistory;

    public PatientDetails(String patientName, String emailAddress, long phoneNumber, int age, String gender, String city
            , String State, String typeOfIllness, String symptoms, String description
            , String appointmentDate, String appointmentTime, String modeOfAppointment, String medicalHistory) {

        this.patientName = patientName;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.gender = gender;
        this.city = city;
        this.State = State;
        this.typeOfIllness = typeOfIllness;
        this.symptoms = symptoms;
        this.description = description;
        this.appointmentDate = appointmentDate;
        this.appointmentTime = appointmentTime;
        this.modeOfAppointment = modeOfAppointment;
        this.medicalHistory = medicalHistory;


    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }

    public String getTypeOfIllness() {
        return typeOfIllness;
    }

    public void setTypeOfIllness(String typeOfIllness) {
        this.typeOfIllness = typeOfIllness;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(String appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(String appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public String getModeOfAppointment() {
        return modeOfAppointment;
    }

    public void setModeOfAppointment(String modeOfAppointment) {
        this.modeOfAppointment = modeOfAppointment;
    }

    public String getMedicalHistory() {
        return medicalHistory;
    }

    public void setMedicalHistory(String medicalHistory) {
        this.medicalHistory = medicalHistory;
    }
}

