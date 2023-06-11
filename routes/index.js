// Create a router instance
const router = require('express').Router();
// Import api routes
const apiRoutes = require('./apiRoutes');

// Define endpoints for api routes
router.use('/api', apiRoutes)

// Export the router
module.exports = router;