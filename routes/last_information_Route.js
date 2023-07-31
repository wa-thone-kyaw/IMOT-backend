const express = require("express");
const router = express.Router();
const Information = require("../mongoSchema/imotSchema");
router.get("/", async (req, res) => {
  try {
    // Adding Pagination
    const limitValue = req.query.limit || 10;
    const skipValue = req.query.skip || 0;
    const information = await Information.find()
      .limit(limitValue)
      .skip(skipValue)
      .sort({ date: -1 });
    res.status(200).send(information);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
