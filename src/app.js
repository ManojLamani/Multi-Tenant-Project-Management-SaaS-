const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", healthRoutes);

app.get("/", (req, res) => {
    res.send("Backend server is running");
});

module.exports = app;