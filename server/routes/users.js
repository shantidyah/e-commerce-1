var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const User = require('../models/users.js')
const Customer = require('../models/customers.js')

/* GET users listing. */
// router.post('/', function(req, res) {
//   User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password
//   })
//   .then(user=>{
//     res.json(user)
//   })
//   .catch(err=>{
//     res.json(err)
//   })
// });

router.post('/login',function(req,res){
  User.findOne({
    email:req.body.email
  })
  .then(users=>{
      if(users==null){
        Customer.findOne({
          email:req.body.email
        })
        .then(cust=>{
          if(cust==null){
            res.json('failed')
          }
          else {
            if(cust.password==req.body.password){
              var token = jwt.sign({ email: req.body.email }, 'secret')
              res.json({token:token,role:"cust"})
            }
            else{
              res.json('failed')
            }
          }
        })
      }
      else{
        if(users.password==req.body.password){
          var token = jwt.sign({ email: req.body.email }, 'secret')
          res.json({token:token,role:"admin"})
        }
        else{
        res.json('failed')
        }
      } 
  })
  .catch(err=>{
    res.json(err)
  })
})

module.exports = router;
