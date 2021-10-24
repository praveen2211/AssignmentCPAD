package com.cpad.dao;

import com.cpad.domain.PatientDetails;
import com.cpad.utils.DbConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import static com.cpad.dao.DbStatements.*;

public class AppointmentDetailsDao {

    public void insertAppointmentDetails(PatientDetails patientDetails) throws SQLException {
        Connection conn = DbConnection.getDbConnection();

        try (PreparedStatement ps = conn.prepareStatement(INSERT.APPOINTMENT_DETAILS)) {
            ps.setString(1, patientDetails.getPatientName());
            ps.setString(2, patientDetails.getEmailAddress());
            ps.setLong(3, patientDetails.getPhoneNumber());
            ps.setInt(4, patientDetails.getAge());
            ps.setString(5, patientDetails.getGender());
            ps.setString(6, patientDetails.getCity());
            ps.setString(7, patientDetails.getState());
            ps.setString(8, patientDetails.getTypeOfIllness());
            ps.setString(9, patientDetails.getSymptoms());
            ps.setString(10, patientDetails.getDescription());
            ps.setString(11, patientDetails.getAppointmentDate());
            ps.setString(12, patientDetails.getAppointmentTime());
            ps.setString(13, patientDetails.getModeOfAppointment());
            ps.setString(14, patientDetails.getMedicalHistory());
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Exception while inserting records " + e);
            throw new SQLException("failed to insert upload status");
        }
    }

    public PatientDetails fetchAppointmentDetails(String patientName, String patientEmail) throws SQLException {

        PatientDetails patientDetails1 = null;
        try (Connection conn = DbConnection.getDbConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(SELECT.FETCH_APPOINTMENT_DETAILS);
        ) {


            while (rs.next()) {
                patientDetails1 = new PatientDetails(rs.getString("PATIENT_NAME"),
                        rs.getString("EMAIL_ADDRESS"),
                        rs.getLong("PHONE_NUMBER"),
                        rs.getInt("AGE"),
                        rs.getString("GENDER"),
                        rs.getString("PATIENT_CITY"),
                        rs.getString("PATIENT_STATE"),
                        rs.getString("TYPEOFILLNESS"),
                        rs.getString("SYMPTOMS"),
                        rs.getString("DESCRIPTION"),
                        rs.getString("APPOINTMENTDATE"),
                        rs.getString("APPOINTMENTTIME"),
                        rs.getString("MODEOFAPPOINTMENT"),
                        rs.getString("MEDICALHISTORY")
                );
            }
        }
        System.out.println("fetched  appointment details for patient from DB");


        return patientDetails1;
    }
}
