package com.cpad.service;

import com.cpad.domain.PatientDetails;

import java.sql.SQLException;

/**
 * @author praveenswamy
 * @version 1.0
 * @since 22-10-2021
 */

public interface AppointmentService {

    /**
     * @param patientDetails
     * @return
     * @throws SQLException
     */

    boolean scheduleAppointment(PatientDetails patientDetails);

    String fetchAppointment(String patientName,String patientEmail);
}

