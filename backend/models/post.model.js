const mongoose = require("mongoose");

const postModel = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    auteur: {
      type: String,
      required: true,
    },
    likers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('posts', postModel);
