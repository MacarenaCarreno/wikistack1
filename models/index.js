const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

// const db = new Sequelize('postgres://localhost:5432/wikistack', {
//     logging: false
// });


const Page = db.define('page', {
  title:{
    type: Sequelize.STRING, 
    allowNull: false
  },
  slug:{
    type: Sequelize.STRING,
    allowNull: false
  },
  content:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  status:{
    type: Sequelize.ENUM('open', 'closed'),
  },
},{
  hooks:{
    beforeValidate: (page)=>{
      page.slug = generateSlug(page.title)  
      }
    }
  }
)

const User = db.define('user', {
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  
  email:{
    type: Sequelize.STRING,
          allowNull: false, 
    validate:{
      isEmail: true
    },
    
  }
  
})


function generateSlug (title) {
  // Removes all non-alphanumeric characters from title
  // And make whitespace underscore
  return title.replace(/\s+/g, '_').replace(/\W/g, '')
};

module.exports = {db,  Page, User };