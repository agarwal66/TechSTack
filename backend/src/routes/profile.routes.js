const express = require("express");
const User = require("../models/User");
const { authRequired } = require("../middleware/auth.middleware");
const { profileUpdateSchema } = require("../utils/validators");

const router = express.Router();

// GET /api/profile
router.get("/", authRequired, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    next(err);
  }
});

// PUT /api/profile
router.put("/", authRequired, async (req, res, next) => {
  try {
    const { error, value } = profileUpdateSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const user = await User.findByIdAndUpdate(req.user.id, value, {
      new: true,
    }).select("-password");

    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
