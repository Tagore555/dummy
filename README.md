Task Management API with Node.js and Express.js
## Task Management API

This API allows users to manage a list of tasks, including creating, retrieving, updating, and deleting tasks.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone this repository:
    ```
    git clone [invalid URL removed]
    ```

2. Navigate to the project directory:
    ```
    cd task-management-api
    ```

3. Install dependencies:
    ```
    npm install
    ```

### Running the Application

Start the server:
```
npm start
```

The API will be running on port 5000 || 5001. You can access it using a tool like Postman or curl.

### Usage

#### Creating a Task

**Request:**

```
POST /tasks
{
  "title": "Complete Node.js project",
  "description": "Finish the remaining tasks and deploy the application",
  "dueDate": "2024-09-01",
  "status": "pending"
}
```

**Response:**

```
{
  "id": 1,
  "title": "Complete Node.js project",
  "description": "Finish the remaining tasks and deploy the application",
  "dueDate": "2024-09-01",
  "status": "pending"
}
```

#### Retrieving All Tasks

**Request:**

```
GET /tasks
```

#### Retrieving a Single Task

**Request:**

```
GET /tasks/1
```

#### Updating a Task

**Request:**

```
PUT /tasks/1
{
  "status": "completed"
}
```

#### Deleting a Task

**Request:**

```
DELETE /tasks/1
```

### Assumptions and Decisions

- In-memory data structure: The tasks are stored in an in-memory array for simplicity. A more persistent storage solution like a database could be used for production environments.
- Basic error handling: The API includes basic error handling for missing required fields and task not found. More robust error handling mechanisms could be implemented.
- JSON format: The API uses JSON for data exchange. Other formats like XML could be considered depending on requirements.

### Additional Notes

- Code Documentation: Use clear and concise comments to explain the purpose of functions, variables, and code blocks.
- Coding Practices: Adhere to standard coding conventions (e.g., consistent indentation, meaningful variable names, proper function naming).
- Testing: Consider writing unit tests to ensure the API's functionality and reliability.
- Security: If the API is intended for public use, implement appropriate security measures to protect against vulnerabilities.
