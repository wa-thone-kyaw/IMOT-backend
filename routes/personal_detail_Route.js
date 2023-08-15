const express = require("express");
const router = express.Router();
//const Information = require("../mongoSchema/imotSchema");
const ImotData = require("../mongoSchema/imotDataSchema");
router.get("/", async (req, res) => {
  const searchName = req.query.name;

  if (!searchName) {
    return res.status(400).json({ message: "Name parameter is required." });
  }

  try {
    // Use Mongoose find to search for data by title
    const foundInformations = await ImotData.find({
      name: searchName,
      //_information_id: req.params._information_id,
    });

    if (foundInformations.length > 0) {
      res.json(foundInformations);
    } else {
      res
        .status(404)
        .json({ message: "No data matching the provided name was found." });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;

// router.delete("/:_information_id", async (req, res) => {
//   const _informationId = req.params._information_id;

//   try {
//     // Use Mongoose remove to delete the data
//     await ImotData.deleteOne({ _information_id: _informationId });

//     res.status(200).json({ message: "Data deleted successfully." });
//   } catch (err) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;
