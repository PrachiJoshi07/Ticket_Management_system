<------Ticket Management System------>

1.Overview

This project is a simple Ticket Management System built using Node.js and MongoDB. It allows users to create, read, update, and delete support tickets via a RESTful API.

<------------------------------------------------------------------------------------------------------------->

2.Table of Contents

A. Features
B. Technologies Used
C. Installation
D. Usage
E. API Endpoints
F. Testing

<------------------------------------------------------------------------------------------------------------->

A. Features

1- Create new tickets
2- Retrieve all tickets
3- Retrieve a single ticket by ID
4- Update tickets
5- Delete tickets

<------------------------------------------------------------------------------------------------------------->

B.Technologies Used

1- Node.js: JavaScript runtime for server-side programming.
2- Express.js: Web framework for Node.js.
3- MongoDB: NoSQL database for storing ticket data.
4- Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
5- Postman: Tool for testing API endpoints.

<------------------------------------------------------------------------------------------------------------->

C.Installation

1- Clone the repository:

-git clone <repository-url>
-cd ticket-management-system
-Install the dependencies:


2- npm install

a. Create a .env file in the root directory and add your MongoDB connection string:
-MONGODB_URI=<your_mongodb_connection_string>
-PORT=9000

b. Start the server:
-nodemon server

<------------------------------------------------------------------------------------------------------------->

D. Usage

-Once the server is running, you can use Postman or any other API client to interact with the endpoints.

<------------------------------------------------------------------------------------------------------------->

E. API Endpoints

1- Create a new ticket:

Method- POST 
Endpoints-/api/tickets/create
Body- json

{
    "title": "Ticket Title",
    "description": "Ticket Description"
}

2-Get all tickets:

Method- GET
GET /api/tickets

3-Get a single ticket by ID:

Method- GET
GET /api/tickets/:id

3- Update a ticket by ID:

Method - PATCH 
Endpoints- /api/tickets/:id
Body: json

{
    "title": "Updated Title",
    "description": "Updated Description"
}

4- Delete a ticket by ID:

Method- DELETE 
Endpoints-/api/tickets/:id

<------------------------------------------------------------------------------------------------------------->

F- Testing

-You can test the API endpoints using Postman. Ensure your server is running and use the appropriate methods and endpoints as described above.


<------------------------------------------------------------------------------------------------------------->

