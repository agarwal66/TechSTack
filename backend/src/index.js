const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const profileRoutes = require("./routes/profile.routes");
const taskRoutes = require("./routes/task.routes");
const { errorHandler } = require("./middleware/error.middleware");

dotenv.config();

const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // later frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

connectDB();
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/tasks", taskRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
