'use strict'
const express = require('express'),
      router = express.Router(),
      images = require('../helpers/images')

const Product = require('../models/products.js')


/* GET main endpoint. */
router.get('/', (req, res) => {
  Product.find({})
  .then(products=>{
    console.log(products);
    res.json(products)
  })
  .catch(err=>{
    console.log(err);
  })

})
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl,
      file: req.file
    })
})

router.post('/addPro',(req,res)=>{
  Product.create({
    name: req.body.name,
    url: req.body.url,
    brand: req.body.brand,
    price: req.body.price,
    category : req.body.category
  })
    .then(newSong => {
      res
        .status(200)
        .json(newSong)
    })
    .catch(err => {
      res
        .status(500)
        .json(err)
    })
})


router.delete('/delete/:id', (req,res) =>{
  Product.findByIdAndRemove( req.params.id )
  .then( result =>{
      res.json( result )
  })
  .catch( err =>{
      res.json( err )
  })
})

router.put('/edit/:id', (req,res)=>{
  Product.findByIdAndUpdate( req.params.id, {
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    url: req.body.url
  })
  .then( product => {
      res.json( product )
  })
  .catch( err =>{
      res.json( err )
  })
})


module.exports = router
