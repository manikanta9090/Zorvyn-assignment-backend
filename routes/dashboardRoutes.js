const express = require("express");
const router = express.Router();
const { getSummary } = require("../controllers/dashboardController");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/summary", roleMiddleware("admin", "analyst"), getSummary);

module.exports = router;