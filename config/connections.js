// Imports the required modules from the 'mongoose' library
const { connect, connection } = require("mongoose");

// Creates a connection string for the MongoDB database.
// If the environment variable 'MONGODB_URI' is set, it uses that value;
// otherwise, it defaults to a local database connection at "mongodb://127.0.0.1:27017/studentsDB".
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentsDB";

// Connects Mongoose to the MongoDB database using the connection string.
connect(connectionString);

// Exports the Mongoose connection object for external use, e.g., in other parts of the application.
module.exports = connection;