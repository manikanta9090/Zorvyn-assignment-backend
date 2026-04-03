const express = require("express");
const router = express.Router();
const {
    createRecord,
    getRecords,
    updateRecord,
    deleteRecord,
} = require("../controllers/recordController");

const roleMiddleware = require("../middleware/roleMiddleware");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, roleMiddleware("admin"), createRecord);

// 👇 Access Control Applied

router.get("/", roleMiddleware("admin", "analyst", "viewer"), getRecords);
router.put("/:id", roleMiddleware("admin"), updateRecord);
router.delete("/:id", roleMiddleware("admin"), deleteRecord);

module.exports = router;