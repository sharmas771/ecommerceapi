const express = require('express');
const router = express.Router();
// tell riuter to use product.js for /products api
router.use('/tasks',require('./products'));

module.exports = router;