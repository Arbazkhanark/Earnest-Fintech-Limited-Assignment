# ToDo Task Management Application

This project is a Task Management Application developed using React for the frontend, Express.js for the backend, and a SQL database for data storage. It allows users to manage tasks by adding, updating, marking as completed, and deleting tasks. The project emphasizes code readability, structure, and best practices.

## Technologies Used
- **Frontend**: React, React Hooks, Axios
- **Backend**: Express.js, Sequelize (ORM for SQL databases)
- **Database**: SQL (e.g., MySQL)

## Features
- **Task Management**:
  - Display a list of tasks with their titles, descriptions, and completion status.
  - Add a new task via a form.
  - Update a task's status (completed or not) with a button toggle.
  - Delete a task with a delete button.
- **RESTful API**:
  - Implement endpoints for retrieving all tasks, adding a new task, updating a task's status, and deleting a task.

## Installation
### Prerequisites:
- Node.js and npm installed
- SQL database (e.g., MySQL) installed and running

### Backend Setup:
1. Navigate to the `server` directory:
2. Install dependencies:
    npm install
3. Configure Environment Variables:
- Create a `.env` file in the `server` directory and set the following variables:
  ```
  PORT=4000
  DB_NAME=your-db-name
  ```

4. Run the database migrations:
  -- cd server
5. Start the backend server:
  -- node index
3. Start the frontend application:
  -- npm run dev /npm start

### Frontend Setup:
1. Navigate to the `client` directory:
2. Install dependencies:
----- npm install



## License
This project is licensed under the [MIT License](LICENSE).
