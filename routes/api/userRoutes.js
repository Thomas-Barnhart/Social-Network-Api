// Imports the 'express' router module
const router = require("express").Router();

// Imports functions from the userController.js file
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// Route Configuration:
// Route for handling GET and POST requests at http://localhost:3001/api/users
router.route("/").get(getUsers).post(createUser);

// Route Configuration:
// Route for handling GET, PUT, and DELETE requests at http://localhost:3001/api/users/:userId
router.route("/:userId").get(getUser).put(updateUser).delete(deleteUser);

// Route Configuration:
// Route for handling POST and DELETE requests at http://localhost:3001/api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// Exports the configured router for use in other parts of the application
module.exports = router;