const express = require("express");
const router = express.Router();
//const Information = require("../mongoSchema/imotSchema");
const ImotData = require("../mongoSchema/imotDataSchema");
router
  .get("/", async (req, res) => {
    const searchID = req.query._id;

    if (!searchID) {
      return res.status(400).json({ message: "ID parameter is required." });
    }

    try {
      // Use Mongoose find to search for data by title
      const foundInformations = await ImotData.find({
        _id: searchID,
        //_information_id: req.params._information_id,
      });

      if (foundInformations.length > 0) {
        res.json(foundInformations);
      } else {
        res
          .status(404)
          .json({ message: "No data matching the provided ID was found." });
      }
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  })
  .delete("/", async (req, res) => {
    /* const _informationId = req.params._information_id; */
    const deleteID = req.query._id;
    try {
      // Use Mongoose remove to delete the data
      await ImotData.deleteOne({ _id: deleteID });

      res.status(200).json({ message: "Data deleted successfully." });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  })
  .patch("/", async (req, res) => {
    const patchID = req.query._id;

    const updatedInformation = req.body;

    try {
      // Use Mongoose updateOne to update the data
      const patchData = {};
      // patchData.name = updatedInformation.name;
      for (const key in updatedInformation) {
        patchData[key] = updatedInformation[key];
      }

      await ImotData.updateOne({ _id: patchID }, { $set: patchData });

      //   try {
      //     // Use Mongoose updateOne to update the data
      //     await ImotData.updateOne(
      //       { _id: patchID },
      //       {
      //         $set: {
      //           name: updatedInformation.name,
      //         },
      //       }
      //     );
      res.status(200).json({ message: "Data updated successfully." });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

module.exports = router;

module.exports = router;
