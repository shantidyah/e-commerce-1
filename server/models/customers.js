const mongoose = require('mongoose');
const Schema = mongoose.Schema

const schemaCustomer = new Schema({
    fname:{
        type: String
    },    
    lname:{
        type: String
    },
    email:{
        type: String
    },
    address:{
        type: String
    },
    city:{
        type: String
    },
    password:{
        type: String
    }
},{
    timestamps:
    {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
})

const Customer = mongoose.model('Customer', schemaCustomer)

module.exports = Customer