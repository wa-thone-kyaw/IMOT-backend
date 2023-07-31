const mongoose = require("mongoose");

const category_highlightSchema = new mongoose.Schema({
  category_name: String,
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

// Create the model for the "category_highlights" collection
const CategoryHighlight = mongoose.model(
  "CategoryHighlight",
  category_highlightSchema
);

module.exports = CategoryHighlight;
