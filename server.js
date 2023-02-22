const express = require("express");
const connectDB = require("./config/db");

const app = express();
const cors = require("cors");
app.use(cors());
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.send("API IS RUNNING");
});

app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));
