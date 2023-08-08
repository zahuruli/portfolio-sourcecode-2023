const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { router } = require("./routes/portfolioRoute");
const path = require("path");
const fs = require("fs");

//dotenv config:
dotenv.config();

//rest object:
const app = express();

//middlewear:
app.use(cors());
app.use(express.json());

//static path:
app.use(express.static(path.join(__dirname, "/client/dist")));

//app use:
app.use("/api/v1/portfolio", router);

// routes:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

//port:
const PORT = process.env.PORT || 8080;
const hostName = "127.0.0.1";

//listen:
app.listen(PORT, () => {
  console.log(`Server is running on http://${hostName}:${PORT}`);
});
