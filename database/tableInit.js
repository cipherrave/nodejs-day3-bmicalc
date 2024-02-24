import pool from "./connection.js";

// create User table if not exist
export async function createUsersTable() {
  try {
    const createTableQuery = await pool.query(
      'CREATE TABLE IF NOT EXISTS "users" ( weight VARCHAR(20) NOT NULL, height VARCHAR(20) NOT NULL, bmi VARCHAR(20) NOT NULL, email VARCHAR(255), date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP )'
    );
    console.log("users table created successfully");
  } catch (error) {
    console.log(error, "Error creating users table");
  }
}
