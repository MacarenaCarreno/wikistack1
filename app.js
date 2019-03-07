const express = require('express');
const morgan = require('morgan');
const app = express();
const { db, Page, User} = require('./models');


const content = require('./views/layout')

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');


const PORT = 3000;


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

app.get('/', (req, res, next)=>{
  try{
  res.redirect('/wiki')
}
catch(error){
  console.log(error)
}
})



// app.get('/', (req, res)=>{
//   try{
//    res.send(content(''));
//   }
//   catch(error){
//     console.log(error)
//   }
// })

db.authenticate().
then(() => {
  console.log('connected to the database');
})


const init = async()=>{
  await db.sync({force: false})


 app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
 
}

init()








