const express = require('express');
const morgan = require('morgan');
const app = express();
const { db } = require('./models');


const content = require('./views/layout')

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res)=>{
  try{
   res.send(content(''));
  }
  catch(error){
    console.log(error)
  }
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
