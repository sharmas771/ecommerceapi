const express = require('express');
const router = express.Router();
const productsApi = require('../../../controllers/api/products_api');
// direct router to controller action for geting productlist
router.get('/',productsApi.productlist);
// direct router to controller action for creating new product
router.post('/create',productsApi.create);
// direct router to contoller action for deleting a product
router.delete('/:id',productsApi.delete);
// direct router to contoller action for updating product quantity
router.post('/:id/update_quantity/',productsApi.update);


module.exports = router;