const mongoose=  require('mongoose');

const todoSchema= mongoose.Schema({
    todo_description:{
        type:String,
        required: true
    },
    todo_responsible:{
        type:String,
        required: true
    },
    todo_priority:{
        type:String,
        required:true,
       
    }, todo_completed:{
        type:Boolean
       
    }


})
module.exports=mongoose.model('Todo',todoSchema);
