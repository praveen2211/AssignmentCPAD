package com.cpad.utils;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnection {

    public static Connection getDbConnection() throws SQLException {
        Connection con = null;

        String dbURL2 = "jdbc:oracle:thin:@localhost:1521:orcl";
        String username = "system";
        String password = "Welcome";
        con = DriverManager.getConnection(dbURL2, username, password);
        //con = DriverManager.getConnection(dbURL2, username, password);

        if (con != null) {
            System.out.println("Connected with connection #3");
        }
        return con;
    }
}