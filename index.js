const express = require("express");
require("dotenv").config();
const cors = require("cors");
const favicon = require("serve-favicon");
const path = require("path");
const dbConnection = require("./configs/db");
const app = express();

// Middleware

// app.use("/favicon/favicon.ico", express.static("favicon/favicon.ico"));
app.use(cors());
app.use(express.json());
app.use(express.static("public/image"));

app.use(favicon(path.join(`${__dirname}`, "public", "image", "favicon1.png")));

// db connection
dbConnection();
// Route
app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "server is running....",
  });
});
// user route
app.use("/user", require("./routes/userRoute"));
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ status: "fail", message: err });
});
const PORT = process.env.PORT || 7000;
// server running
app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
