const Comment = require("../models/commentaries.model");

module.exports.commentController = {
  postComment: (req, res) => {
    Comment.create({
      commentName: req.body.commentName,
      commentText: req.body.commentText,
      commentNewsId: req.body.commentNewsId,
    }).then((data) => {
      res.json(data);
    });
  },
  deleteCommentId: (req, res) => {
    Comment.findByIdAndRemove(req.params.id).then(() => {
      res.json("Комментарий удален");
    });
  },
  getCommentByNewsId: (req, res) => {
    Comment.find(req.params.id).then((data) => {
      res.json(data);
    });
  },
};
