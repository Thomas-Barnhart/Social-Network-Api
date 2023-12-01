// Imports the necessary models from the "../models" directory
const { User, Thought, Reaction } = require("../models");
// Imports the 'mongoose' library
const mongoose = require("mongoose");

// Imports the database connection object from the "../config/connection" file
const connection = require("../config/connection");

// Seed data containing initial user information
const users = [
  {
    username: "Obi-Wan Kenobi",
    email: "obiwan@jediorder.com",
    thought: [], // Placeholder for thoughts; will be populated later
  },
];

// Outputs the connection object to the console
console.log(connection);

// Database connection event listener
// Listens for the 'open' event on the database connection
connection.once("open", async () => {
  console.log("connected");

  // Deletes all existing users in the database
  await User.deleteMany({});

  // Inserts seed data (users) into the 'User' collection in the database
  await User.collection.insertMany(users);

  // Outputs a table with the seed data to the console
  console.table(users);
  // Indicates that the seeding process is complete
  console.info("Seeding complete! 🌱");
  // Exits the process to end the script
  process.exit(0);
});