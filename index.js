const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/BlogModel");
const blogRouter = require("./routes/routes");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://Prashant:prashant123@cluster0.udmreuk.mongodb.net/NewBlog"
);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3500;

app.get("/test", (req, res) => {
  res.send("Server test api hit");
});

app.use("/blog", blogRouter);

app.listen(port, () => {
  console.log("Server  is running on port", port);
});
