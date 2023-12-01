// Imports the 'express' router module
const router = require("express").Router();
// Imports the API routes module from the "./api" file
const apiRoutes = require("./api");

// Middleware setup
// Mounts the API routes under the "/api" path
router.use("/api", apiRoutes);

// Default route middleware
// Sends a response with "Wrong route!" for any unmatched routes
router.use((req, res) => res.send("Wrong route!"));

// Exports the router for use in other parts of the application
module.exports = router;