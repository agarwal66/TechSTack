const fs = require("fs");
const path = require("path");

const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error:", err);

  // Optional: log to file (for assignment "log files")
  const logPath = path.join(__dirname, "..", "logs", "app.log");
  const logMessage = `[${new Date().toISOString()}] ${req.method} ${
    req.url
  } - ${err.message}\n`;

  fs.appendFile(logPath, logMessage, (fsErr) => {
    if (fsErr) console.error("Log write error:", fsErr.message);
  });

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Internal server error",
  });
};

module.exports = { errorHandler };
