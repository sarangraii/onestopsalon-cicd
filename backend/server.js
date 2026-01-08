const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "OneStopSalon Backend Running" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
