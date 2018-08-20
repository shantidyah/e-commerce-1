const mongoose = require('mongoose');
const Schema = mongoose.Schema

const schemaProduct = new Schema({
    name:{
        type: String
    },
    brand:{
        type: String
    },
    price:{
        type: Number
    },
    category:{
        type: String
    },
    url:{
        type: String
    }
},{
    timestamps:
    {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
})

const Product = mongoose.model('Product', schemaProduct)

module.exports = Product