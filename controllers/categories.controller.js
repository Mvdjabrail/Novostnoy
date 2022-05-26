const Categori = require("../models/categories.model");

module.exports.categoriController = {
  postCategori: (req, res) => {
    Categori.create({
      categoriName: req.body.categoriName,
    }).then((data) => {
      res.json(data);
    });
  },
  deleteCategoriById: (req, res) => {
    Categori.findByIdAndRemove(req.params.id).then(() => {
      res.json("Новость удалена");
    });
  },
  getCategori: (req, res) => {
    Categori.find().then((data) => {
      res.json(data);
    });
  },
};
