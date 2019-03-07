const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage')
const { db, Page, User} = require('../models');
const wikipage = require('../views/wikipage')
const main = require('../views/main')


router.get('/', async(req, res, next)=>{
  
  try{
    const pages = await Page.findAll()
    res.send(main(pages))
  }
  catch(error){
    next(error)
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
    res.redirect(`/wiki/${page.slug}`)
  }
  catch(error){
   next(error)
  }

})

router.get('/add', (req, res)=>{
  try{
    res.send(addPage())
  }
  catch(error){
    console.log(error)
  }
})

router.get('/:slug', async(req, res, next)=>{
  try {
    const page = await Page.findOne({
      where:{ 
        slug : req.params.slug
      }
    });
    console.log('wikipage::::', wikipage(page))
    //res.json(wikipage(page))
    res.send(wikipage(page))


  } catch (error) {
    next(error)

  }
});





module.exports = router