const { Router } = require("express");
const { categoriController } = require("../controllers/categories.controller");

const router = Router();

router.post("/categori", categoriController.postCategori);
router.delete("/categori/:id", categoriController.deleteCategoriById);
router.get('/categori', categoriController.getCategori)
module.exports = router;
