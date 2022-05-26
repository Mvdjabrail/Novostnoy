const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  newsTitle: String,
  newsText: String,
  newsCategoriesId: {
    ref: "categories.model",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
