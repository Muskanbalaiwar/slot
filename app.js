const express = require('express'); 
const dotenv=require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const cors=require('cors');
const app = express();
app.use(cors())
const sequelize=require('./util/database');
app.use(bodyParser.json())

const route =require('./routes/slot');
app.use(route);

sequelize.sync()
.then(res=>{
    console.log('res');
})
.catch(err=>{
    console.log(err);
})
app.listen(3001);