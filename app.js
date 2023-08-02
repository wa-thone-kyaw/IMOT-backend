//jshint esversion:6
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();
const path = require("path");

// Allow requests from localhost:3000 (your React app)
app.use(cors(/* { origin: "http://localhost:3000" } */));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(bodyParser.json());
//import routes
const testRoutes = require("./routes/test_Route");
const informationsRoute = require("./routes/informations_Route");
const last_informationRoute = require("./routes/last_information_Route");
const viewPhotoRoute = require("./routes/view_photo_Route");

const person_detail_Route = require("./routes/personal_detail_Route");

const informationDataRoute = require("./routes/show_informations_Route");

//import MongoSchema
const Information = require("./mongoSchema/imotSchema");

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://imot-admin:Qf223322@cluster0.zu5pfah.mongodb.net/imotDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//API routes
app.use("/api-test/test", testRoutes);
app.use("/api-test/informations", informationsRoute);
app.use("/api-test/last-informations", last_informationRoute);
app.use("/api-test/personal-detail/:title", person_detail_Route);
app.use("/api/informations", informationDataRoute);

//view photo
app.get("/api-test/uploads/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "uploads", filename);
  res.sendFile(filePath);
});

// Error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//start express server
app.listen(process.env.PORT || 8000, function () {
  console.log("Server has started successfully..✌...✌...✌...✌");
});
