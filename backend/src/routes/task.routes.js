const express = require("express");
const Task = require("../models/Task");
const { authRequired } = require("../middleware/auth.middleware");
const { taskSchema } = require("../utils/validators");

const router = express.Router();

// GET /api/tasks?search=&status=
router.get("/", authRequired, async (req, res, next) => {
  try {
    const { search = "", status } = req.query;
    const query = { user: req.user.id };

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    if (status) {
      query.status = status;
    }

    const tasks = await Task.find(query).sort({ createdAt: -1 });

    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// POST /api/tasks
router.post("/", authRequired, async (req, res, next) => {
  try {
    const { error, value } = taskSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const task = await Task.create({
      ...value,
      user: req.user.id,
    });

    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});

// PUT /api/tasks/:id
router.put("/:id", authRequired, async (req, res, next) => {
  try {
    const { error, value } = taskSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      value,
      { new: true }
    );

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/tasks/:id
router.delete("/:id", authRequired, async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
