const express = require("express");
const cors = require("cors");
const { addLog, getLogs } = require("./logs");

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Monitoring App Backend Running 🚀");
});

// Generate log
app.post("/generate-log", (req, res) => {
  const { type, message } = req.body;

  if (!type || !message) {
    return res.status(400).json({ error: "Type and message required" });
  }

  const log = addLog(type, message);
  res.json(log);
});

// Get all logs
app.get("/logs", (req, res) => {
  res.json(getLogs());
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});