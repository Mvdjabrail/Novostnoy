const { Router } = require('express');
const { commentController } = require('../controllers/commentaries.controller');

const router = Router();

router.post('/comment', commentController.postComment),
router.delete('/comment/:id', commentController.deleteCommentId),
router.get('/comment', commentController.getCommentByNewsId),

module.exports = router ; 