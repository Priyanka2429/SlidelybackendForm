# Backend README.md
Express.js TypeScript Backend for Windows Desktop App
# Description
This backend server is built with Express.js and TypeScript to support a Windows Desktop Application that mimics Google Forms. It handles storing and retrieving form submissions using a JSON file as a database.
# Technologies Used
TypeScript
Express.js
JSON file as database
# Installation Prerequisites
Node.js (version XYZ or higher)
NPM (or Yarn)
# Installation Steps
Clone the repository:  
git clone https://github.com/username/backend-server.git
Navigate to the backend directory:

cd backend-server
Install dependencies:


npm install
Build the TypeScript code (if necessary):


npm run build
Start the server: npm start

API Endpoints/ping GET: Checks if the server is running. 
Always returns true.

/submit POST: Saves a new submission with parameters "name", "email", "phone", "github_link", and "stopwatch_time".

/read GET: Retrieves a specific form submission based on the query parameter "index" (0-indexed).

# Features
Basic Functionality:

Save and retrieve form submissions.

Basic error handling.

# Usage
The frontend application interacts with these endpoints to manage form submissions.
Ensure the server is running locally while using the Windows Desktop App.

# Contributing
Fork the repository.
Make your changes.
Submit a pull request with a clear description of your changes.

# Author

Priyanka 
