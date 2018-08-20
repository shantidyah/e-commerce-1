var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const Customer = require('../models/customers.js')
/* GET users listing. */
router.post('/', function(req, res) {
  Customer.create({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    password: req.body.password
  })
  .then(user=>{
    res.json(user)
  })
  .catch(err=>{
    res.json(err)
  })
});

// router.post('/login',function(req,res){
//   User.findOne({
//     email:req.body.email
//   })
//   .then(users=>{
//       if(users==null){
//         res.json('failed')
//       }
//       else{
//         if(users.password==req.body.password){
//           var token = jwt.sign({ email: req.body.email }, 'secret')
//           res.json(token)
//         }
//         else{
//         res.json('failed')
//         }
//       } 
//   })
//   .catch(err=>{
//     res.json(err)
//   })
// })

module.exports = router;
