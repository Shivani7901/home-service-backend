const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const auth = require("../middleware/auth");   // <-- import middleware

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected route (JWT required)
router.get("/profile", auth, (req, res) => {
  res.json({
    message: "JWT verified, access granted!",
    user: req.user   // comes from auth.js
  });
});

module.exports = router;
