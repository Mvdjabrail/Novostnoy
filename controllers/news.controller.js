const News = require("../models/news.model");

module.exports.newsController = {
  postNews: (req, res) => {
    News.create({
      newsTitle: req.body.newsTitle,
      newsText: req.body.newsText,
      newCategoriesId: req.body.newCategoriesId,
    }).then((data) => {
      res.json(data);
    });
  },
  deleteNewsId: (req, res) => {
    News.findByIdAndRemove(req.params.id).then(() => {
      res.json("Новость удалена");
    });
  },
  patchNewsId: (req, res) => {
    News.findByIdAndUpdate(req.params.id, {
      newsTitle: req.body.newsTitle,
      newsText: req.body.newsText,
      newCategoriesId: req.body.newCategoriesId,
    }).then((data) => {
      res.json(data);
    });
  },
  getNewsById: (req, res) =>{
    News.findById(req.params.id).then((data) =>{
      res.json(data)
    })
  },
  getNews: (req, res) =>{
    News.find().then((data) =>{
      res.json(data)
    })
  },
  getNewsByCategoriesId: (req, res) =>{
    News.find(req.params.id).then((data) =>{
      res.json(data)
    })
  },
};
