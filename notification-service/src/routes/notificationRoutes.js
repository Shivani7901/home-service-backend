// const express = require("express");
// const router = express.Router();
// const { sendNotification } = require("../controllers/notificationController");
// const auth = require("../middleware/auth");

// // POST /api/notifications/send
// router.post("/send", auth, sendNotification);

// module.exports = router;
const express = require("express");
const router = express.Router();
const { sendNotification } = require("../controllers/notificationController");
const auth = require("../middleware/auth");

// POST /send
router.post("/send", auth, sendNotification);

module.exports = router;
