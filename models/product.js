const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    amount:{
        type:Number
    }
});

const Product = mongoose.model('Product',productSchema);

module.exports=Product;
