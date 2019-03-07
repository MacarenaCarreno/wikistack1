const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage')
const { db, Page, User} = require('../models');



router.get('/', (req, res)=>{
  try{
   res.send('got to Get /wskdakda')
  }
  catch(error){
    console.log(error)
  }
})

router.post('/', async(req, res, next)=>{
  
      // res.json(req.body)
      // console.log('body', req.body)
      // console.log('name', req.body.name)

    const page = new Page({ 
       name:  req.body.name,
        email: req.body.email,
        title: req.body.title,
        content:req.body.content,
        status: req.body.status  
         });
    
  try{
     
    
    await page.save();
    console.log(page)
    res.redirect('/')

  }
  catch(error){
   next(error)
  }
  // try {
  //   const newwikiPage = await Page.create(req.body)
  //   res.send(newwikiPage)
     
    
  // } catch (error) {
  //   console.log(error)
  // }
  
  
  
})

router.get('/add', (req, res)=>{
  try{
    res.send(addPage())
  }
  catch(error){
    console.log(error)
  }
})


module.exports = router