// Imports the 'express' framework for building web applications
const express = require("express");
// Imports the database connection object from the "./config/connection" file
const db = require("./config/connection");
// Imports the routes module containing API routes from the "./routes" file
const routes = require("./routes");

// Retrieves the current working directory path
const cwd = process.cwd();

// Defines the port number for the API server, defaults to 3001 if not provided
const PORT = process.env.PORT || 3001;

// Creates an instance of the express application
const app = express();

// Middleware setup
// Parses incoming request bodies in urlencoded and JSON formats
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Associates the defined routes with the express application
app.use(routes);

// Database connection event listener
// Listens for the 'open' event on the database connection
db.once("open", () => {
  // Starts the express application to listen for incoming requests on the specified port
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});