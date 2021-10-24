package com.cpad.service;

import com.cpad.domain.PatientDetails;

public class TestAppointment {

    public static void main(String[] args) {
       /* String str="2021-26-10";
        Date appointmentDate= Date.valueOf(str);//converting string into sql date*/

        AppointmentService appointmentService = new AppointmentServiceImpl();
        PatientDetails patientDetails = new PatientDetails("Ram Kumar",
                "ram.kumar@gmail.com",
                9845678899L,
                45,
                "Male",
                "Bangalore",
                "Karnataka",
                "Fever",
                "Cough,Fever,Cold",
                "Un easiness due to cold and stomach ache with high fever",
                null,
                "16:00",
                "Video",
                "Sugar & BP");
        System.err.println("patientDetails --->" + patientDetails);
        appointmentService.scheduleAppointment(patientDetails);
    }

}
