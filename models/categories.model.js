const mongoose = require("mongoose");

const categoriSchema = mongoose.Schema({
  categoriName: String,
});

const Categori = mongoose.model("Categori", categoriSchema);

module.exports = Categori;
