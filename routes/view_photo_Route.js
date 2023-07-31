const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();
router.get("/", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "uploads", filename);
  res.sendFile(filePath);
});

module.exports = router;
//view photo
// app.get("/api/uploads/:filename", );
