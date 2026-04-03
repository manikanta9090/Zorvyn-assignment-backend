const express = require("express");
const router = express.Router();
const { getSummary } = require("../controllers/dashboardController");
const auth = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/summary", auth,
    roleMiddleware("admin", "analyst"), getSummary);

module.exports = router;