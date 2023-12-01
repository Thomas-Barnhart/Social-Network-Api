// Imports the 'express' router module
const router = require("express").Router();
// Imports the user routes module from the "./userRoutes" file
const userRoutes = require("./userRoutes");
// Imports the thought routes module from the "./thoughtRoutes" file

const thoughtRoutes = require("./thoughtRoutes");

// Middleware setup
// Mounts user routes under the "/users" path
router.use("/users", userRoutes);
// Mounts thought routes under the "/thoughts" path
router.use("/thoughts", thoughtRoutes);

// Exports the router configured with user and thought routes
module.exports = router;