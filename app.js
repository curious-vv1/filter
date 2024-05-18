const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const filterRoute = require("./routes/filter_route");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

const URL = process.env.MONGODB_URI;

mongoose
  .connect(URL)
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "filter-frontend", "build")));
  res.sendFile(path.resolve(__dirname, "filter-frontend", "build", "index.html"));
});

app.use("/filter", filterRoute);

app.listen(PORT, () => {
  console.log(`server started succesfully at ${PORT}`);
});
