const express = require('express');
const router= express.Router();

const Todo= require('../model/todo');

router.get('/',async (req,res)=>{
    try{

        const todo = await Todo.find();
        res.json(todo)


    }
    catch(err){

        console.log("Error"+err);

    }
})

router.get('/:id', async (req,res)=>{
     try{
         const todo = await Todo.findById(req.params.id);
         res.json(todo);


     }
     catch(err){
         console.log("Error"+err);

     }
})

router.post('/add', async (req,res)=>{

  
    try{

       // let todo =new Todo(req.body);

       const todo_description=req.body.todo_description;
       const todo_responsible=req.body.todo_responsible;
       const todo_priority=req.body.todo_priority;
       const todo_completed=req.body.todo_completed;

    const todo =new Todo({

        todo_description,
      todo_responsible,
         todo_priority,
       todo_completed
        
    })

     const t1 = await todo.save();
        res.json(t1);

    }
    catch(err){
        res.send('Error'+err);

    }
})


router.post('/update/:id', async (req,res)=>{
    try{
        const todo =await Todo.findById(req.params.id);
    
        todo.todo_description=req.body.todo_description;
        todo.todo_responsible=req.body.todo_responsible;
        todo.todo_priority=req.body.todo_priority;
        todo.todo_completed=req.body.todo_completed;
    
        const e1=todo.save();
        res.json("data saved")
    
    }
    catch(err){
        console.log("Error"+err)
    
    }
    
})


module.exports=router;