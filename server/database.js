const mysql = require("mysql2/promise");

const dbConnection = async () => {
    try {
        const db = await mysql.createConnection({
            user: "root",
            host: "localhost",
            password: "ask@462002",
            database: "todo_task"
        });

        // Create the 'tasks' table if it doesn't exist
        await db.query(`
            CREATE TABLE IF NOT EXISTS tasks (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                completed BOOLEAN NOT NULL DEFAULT 0,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);

        console.log('Database Connected');
        return db;
    } catch (error) {
        console.log(error);
        throw error; // rethrow the error to handle it in the caller
    }
}

module.exports = dbConnection;
