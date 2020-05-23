const { Router } = require('express');
const router = Router();
const author = require('./author.routes');
const book = require('./book.routes');


router.use('/api', author)
router.use('/api', book)

module.exports = router;