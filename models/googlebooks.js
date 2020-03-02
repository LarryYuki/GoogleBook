const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GbookSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  authors: {
    type: String,
    default: true
  },
  description: {
    type: String,
    default: true
  },
  image: {
    type:  String,
    default: true
  },
  link: {
    type: String,
    default: true
  },

});

const Gbook = mongoose.model("Gbook", GbookSchema);

module.exports = Gbook;
