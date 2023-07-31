const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Test route was successful....",
  });
});

// app.route("/api/test").get(function (req, res) {
//   res.status(200).json({
//     message: "Test was successful",
//   });
// });

module.exports = router;
