const Product = require('../../models/product');

//controller action for adding new product
module.exports.create = async function (req, res) {
    console.log(req.body);
    let product = await Product.create(req.body);
    return res.status(200).json({
        data: { product }
    });
};
//controller action for geting product list
module.exports.productlist = async function (req, res) {
    let products = await Product.find({});
    return res.status(200).json({
        data: { products }
    });
}
//controller action for delete a product with given id
module.exports.delete = async function (req, res) {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
        message:'Product Deleted'
    });
}
//controller action for update a product quantity
module.exports.update = async function(req,res){
    let n = Number(req.query.number);
    let product = await Product.findById(req.params.id);
    let a = await Product.findOneAndUpdate(req.params.id,{quantity:product.quantity+n});
    return res.status(200).json({
        data:{a},
        message:'Updated Successfully'
        });
}