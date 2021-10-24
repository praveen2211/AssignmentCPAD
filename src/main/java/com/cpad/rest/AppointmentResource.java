package com.cpad.rest;

import com.cpad.constants.CrossProductConstants;
import com.cpad.domain.PatientDetails;
import com.cpad.service.AppointmentService;
import com.cpad.service.AppointmentServiceImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * @author praveenswamy
 * @version 1.0
 * @since 22-10-2021
 */

@RestController("cpad")

public class AppointmentResource {

    @PostMapping("appointment/schedule")

    public Response scheduleAppointment(PatientDetails patientDetails) {

        if (patientDetails.getPatientName().equals(null)) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Patient details is null").build();
        }
        AppointmentService appointmentService = new AppointmentServiceImpl();
        boolean scheduleAppointment = appointmentService.scheduleAppointment(patientDetails);
        if (scheduleAppointment) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CrossProductConstants.APPOINTMENT_EXCEPTION).build();
        }


        return null;
    }

    @GetMapping("appointmentDetails/fecthSchedule")

    public Response fecthSchedule(String patientName, String patientEmail) {

        if (patientName.equals(null) || patientEmail.equals(null)) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Patient details is null").build();
        }
        AppointmentService appointmentService = new AppointmentServiceImpl();
        String appointMentDetails = appointmentService.fetchAppointment(patientName, patientEmail);
        if (!appointMentDetails.equals(null)) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CrossProductConstants.APPOINTMENT_EXCEPTION).build();
        }


        return null;
    }
}
