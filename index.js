const express=require('express');
const app=express();
const routes=require('./Routes/router');
const bodyparser=require('body-parser');
const sequelize=require('./model/sequelize');
const cors = require('cors')

app.use(cors());
app.use(bodyparser.json());
app.use('/',routes);

//sequelize.authenticate().then(()=>console.log("sync is completed")).catch((err)=>console.log(err));
sequelize.sync().then(()=>console.log("sync is completed")).catch((err)=>console.log(err));

app.listen(5000,()=>console.log("server is running"));