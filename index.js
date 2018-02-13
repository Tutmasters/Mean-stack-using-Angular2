const express=require("express");
const bodyParser = require('body-parser');
const app=express();
const path=require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


const mongoose = require('mongoose');
const config=require('./config/database');
mongoose.connect(config.uri,(err)=>{
    if(err){
        console.log('Could not connect to Database',err);
    }else{
        console.log(config.secret);
        console.log('Connect with Database '+config.db)
    }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*',(req, res) =>{
    res.sendFile(path.join(__dirname +'/client/dist/index.html'));
  });
  
  app.listen(8080,(req,res)=>{
      console.log("Server Listening on port 8080");
  });
  