const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.post("/news", newsController.postNews);
router.delete("/news/:id", newsController.deleteNewsId);
router.patch("/news/:id", newsController.patchNewsId);
router.get("/news/:id", newsController.getNewsById);
router.get("/news", newsController.getNews);
router.get("news/categories/:id", newsController.getNewsByCategoriesId);

module.exports = router;
