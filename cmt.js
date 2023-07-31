//app logic
// app
//   .route("/api/contents")
//   .get(function (req, res) {
//     Content.find(function (err, foundContents) {
//       if (!err) {
//         res.send(foundContents);
//       } else {
//         res.status(400).json({
//           message: "No Information was found..",
//         });
//       }
//     });
//   })
//   .post(function (req, res) {
//     const content = new Content({
//       title: req.body.title,
//       description: req.body.description,
//     });
//     content.save(function (err) {
//       if (!err) {
//         res.status(200).json({
//           message: "Successfully add a new Information...",
//         });
//       } else {
//         res.send(err);
//         console.log(err);
//       }
//     });
//   });

// ... (previous code)
// //jshint esversion:6
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// //const multer = require("multer");
// //const bcrypt = require("bcrypt");

// const app = express();
// app.set("view engine", "ejs");

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "./uploads/");
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, file.originalname);
// //   },
// // });
// // const upload = multer({
// //   storage: storage,
// //   limits: {
// //     fileSize: 1024 * 1024 * 5,
// //   },
// //   fileFilter: fileFilter,
// // });
// //to store img or css etc in public folder
// app.use(express.static("public"));

// //connect with mongodb

// // mongoose.connect(
// //   "mongodb+srv://imot-admin:Qf223322@cluster0.zu5pfah.mongodb.net/imotDB",
// //   { useNewUrlParser: true },
// //   { useUnifiedTopology: true },
// //   { useCreateIndex: true }
// // );
// // ... (previous code)

// //connect with mongodb
// mongoose.connect(
//   "mongodb+srv://imot-admin:Qf223322@cluster0.zu5pfah.mongodb.net/imotDB",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     //useCreateIndex: true,
//   }
// );

// // ... (rest of the code)

// const imotSchema = {
//   /*  category_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Category",
//   }, */

//   title: String,
//   description: String,
// };

// const Content = mongoose.model("Content", imotSchema);
// app.route("/api/test").get(function (req, res) {
//   res.status(200).json({
//     message: "Test was successful",
//   });
// });
// //app logic
// app
//   .route("/api/contents")
//   .get(function (req, res) {
//     Content.find(function (err, foundContents) {
//       if (!err) {
//         res.send(foundContents);
//       } else {
//         res.status(400).json({
//           message: "No Information was found..",
//         });
//       }
//     });
//   })
//   .post(function (req, res) {
//     const content = new Content({
//       title: req.body.title,
//       description: req.body.description,
//     });
//     content.save(function (err) {
//       if (!err) {
//         res.status(200).json({
//           message: "Successfully add a new Information...",
//         });
//       } else {
//         res.send(err);
//         console.log(err);
//       }
//     });
//   });

// //start express server
// app.listen(process.env.PORT || 3000, function () {
//   console.log("Server has started successfully..✌...✌...✌...✌");
// });

///////all

// //jshint esversion:6
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const app = express();
// const path = require("path");
// //for image upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "_" + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// const upload = multer({
//   storage: storage,
//   /*  limits: {
//     fileSize: 1024 * 1024 * 5,
//   }, */
//   fileFilter: fileFilter,
// });

// app.set("view engine", "ejs");

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.use(express.static("public"));

// mongoose.connect(
//   "mongodb+srv://imot-admin:Qf223322@cluster0.zu5pfah.mongodb.net/imotDB",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// const ImotSchema = {
//   /*  category_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Category",
//   }, */

//   title: String,
//   description: String,
//   thumbnail: String,
//   date: {
//     type: Date,
//     default: Date.now(),
//   },
// };

// const Information = mongoose.model("Content", ImotSchema);
// //Api test
// app.route("/api/test").get(function (req, res) {
//   res.status(200).json({
//     message: "Test was successful",
//   });
// });

// //app logic
// app
//   .route("/api/informations")
//   .get(async function (req, res) {
//     try {
//       // const filename = req.params.filename;
//       // const filePath = path.join(__dirname, filename);
//       const foundInformations = await Information.find();
//       res.send(foundInformations);
//       //res.sendFile(filePath);
//     } catch (err) {
//       res.status(400).json({
//         message: "No Information was found..",
//       });
//     }
//   })
//   .post(upload.single("thumbnail"), async function (req, res) {
//     const information = new Information({
//       title: req.body.title,
//       description: req.body.description,
//       thumbnail: req.file.path,
//     });
//     try {
//       await information.save();
//       res.status(200).json({
//         message: "Successfully add a new Information...",
//       });
//     } catch (err) {
//       res.send(err);
//       console.log(err);
//     }
//   });

// //view photo
// app.get("/api/uploads/:filename", (req, res) => {
//   const filename = req.params.filename;
//   const filePath = path.join(__dirname, "uploads", filename);
//   res.sendFile(filePath);
// });
// // ... (rest of the code)

// // Error handling middleware
// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// //start express server
// app.listen(process.env.PORT || 3000, function () {
//   console.log("Server has started successfully..✌...✌...✌...✌");
// });

//////////

// const ImotSchema = {
//   /*  category_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Category",
//   }, */

//   title: String,
//   description: String,
//   thumbnail: String,
//   date: {
//     type: Date,
//     default: Date.now(),
//   },
// };

//const Information = mongoose.model("Information", ImotSchema);
//Api test
// app.route("/api/test").get(function (req, res) {
//   res.status(200).json({
//     message: "Test was successful",
//   });
// });
