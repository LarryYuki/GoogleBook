const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GbookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  authors: [{
    type: String,
    required: true
  }],
  description: {
    type: String,
    required: true
  },
  image: {
    type:  String,
    required: true
  },
  link: {
    type: String,
    required: true
  },

});

const Gbook = mongoose.model("Gbook", GbookSchema);

module.exports = Gbook;
