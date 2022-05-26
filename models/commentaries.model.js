const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  commentName: String,
  commentText: String,
  commentNewsId: {
    ref: "news.model",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
