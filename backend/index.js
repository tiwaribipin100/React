const express =require('express');
const mongoose = require('mongoose');
const app = express();
const cors=require('cors');

const url= "mongodb://localhost:27017/TodoDb";

mongoose.connect(url, {useNewUrlParser:true});

const con= mongoose.connection;

con.on('open',()=>{
    console.log("DB connected successfully")
});

app.use(cors());
app.use(express.json());
const todoRouter= require('./router/todoRouter');

app.use('/todo',todoRouter);




app.listen(5000,()=>{
    console.log("Server started successfully at port 5000");
})