const express = require('express');
const router = express.Router();
const userList = require('../views/userList')



router.get('/', (req, res)=>{
  try{
    res.send(userList()) //after populate the data we need to change this.
  }
  catch(error){
    console.log(error)
  }
})


router.get('/:id', (req, res)=>{
  try{
    const userId = req.params("id")
    const oneUser = userList.filter(users => {return users.id === userId })
    res.send(oneUser) //after populate the data we need to change this.
    
  }
  catch(error){
    console.log(error)
  }
})



router.post('/', (req, res)=>{
  try{
   console.log('helloPost');
  }
  catch(error){
    console.log(error)
  }
})

router.get('/add/', (req, res)=>{
  try{
   console.log('addPage');
  }
  catch(error){
    console.log(error)
  }
})




module.exports = router