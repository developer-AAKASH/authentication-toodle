const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32
    },
    teenager: {
      type: Boolean,
      required: true
    },
    indian: {
      type: Boolean,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Survey", surveySchema);
