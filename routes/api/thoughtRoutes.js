// Imports the 'express' router module
const router = require("express").Router();

// Imports functions from the thoughtController.js file
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Route Configuration:
// Route for handling GET and POST requests at http://localhost:3001/api/thoughts
router.route("/").get(getThoughts).post(createThought);

// Route Configuration:
// Route for handling GET, PUT, and DELETE requests at http://localhost:3001/api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

// Route Configuration:
// Route for handling POST requests at http://localhost:3001/api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// Route Configuration:
// Route for handling DELETE requests at http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

// Exports the configured router for use in other parts of the application
module.exports = router;