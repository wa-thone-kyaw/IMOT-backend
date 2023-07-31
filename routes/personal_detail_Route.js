const express = require("express");
const router = express.Router();
const Information = require("../mongoSchema/imotSchema");

router.get("/", async (req, res) => {
  const searchTitle = req.query.title;

  if (!searchTitle) {
    return res.status(400).json({ message: "Title parameter is required." });
  }

  try {
    // Use Mongoose find to search for data by title
    const foundInformations = await Information.find({
      title: searchTitle,
      //_information_id: req.params._information_id,
    });

    if (foundInformations.length > 0) {
      res.json(foundInformations);
    } else {
      res
        .status(404)
        .json({ message: "No data matching the provided title was found." });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
