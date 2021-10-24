package com.cpad.service;

import com.cpad.dao.AppointmentDetailsDao;
import com.cpad.domain.PatientDetails;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.sql.SQLException;

/**
 * @author praveenswamy
 * @version 1.0
 * @since 22-10-2021
 */

public class AppointmentServiceImpl implements AppointmentService {
    /**
     * @param patientDetails
     * @return
     * @throws SQLException
     */
    @Override
    public boolean scheduleAppointment(PatientDetails patientDetails) {
        boolean daoStatus = true;
        AppointmentDetailsDao appointmentDetailsDao = new AppointmentDetailsDao();
        try {
            appointmentDetailsDao.insertAppointmentDetails(patientDetails);
        } catch (SQLException e) {
            daoStatus = false;
            System.out.println("Exception while performeing Dao operation " + e);
        }
        return daoStatus;
    }

    @Override
    public String fetchAppointment(String patientName, String patientEmail) {
        ObjectMapper objectMapper = new ObjectMapper();
        String appointmentInfo = null;
        AppointmentDetailsDao appointmentDetailsDao = new AppointmentDetailsDao();
        try {
            PatientDetails appointmentDetails = appointmentDetailsDao.fetchAppointmentDetails(patientName, patientEmail);
            appointmentInfo = objectMapper.writeValueAsString(appointmentDetails);
        } catch (SQLException | JsonProcessingException e) {
            appointmentInfo = null;
            System.out.println("Exception while performeing Dao operation " + e);
        }
        return appointmentInfo;
    }
}
