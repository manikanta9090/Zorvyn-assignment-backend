const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const recordRoutes = require("./routes/recordRoutes");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Running...");
});
app.use("/api/users", userRoutes);

app.use("/api/records", recordRoutes);

app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));