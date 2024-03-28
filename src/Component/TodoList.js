import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import axios from 'axios';

// const Todo =(props)=>{

    
      
//     <tr>
//         <td>{props.todo.todo_description}</td>
//         <td>{props.todo.todo_responsible}</td>
//         <td>{props.todo.todo_priority}</td>
//         <td>
//             <Link to={"/edit/"+props.todo._id}>Edit</Link>
//         </td>
//     </tr>
    
   
// }

export default class TodoList extends Component {

    constructor (props){
        super(props);
        this.state={
            todos:[]
        };

    }
    componentDidMount(){
        axios.get('http://localhost:5000/todo/')
        .then(response =>{
            
            this.setState({
                todos:response.data
            });
            
        })
        
    }

    componentDidUpdate(){
        axios.get('http://localhost:5000/todo/')
        .then(response =>{
            
            this.setState({
                todos:response.data
            });
            
        })

    }

    //  todoLists =()=> {
    //    return  this.state.todos.map(function(currentTodo,i){
    //        return <Todo todo={currentTodo} key={i}/>;


    //     }
    //     );
     

    // }
    render() {
        return (
            <div>
                <center style={{marginTop:10}}><h3>Todo List</h3></center>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* { this.todoLists} */}
      
                       {  this.state.todos.map(function(currentTodo,i){
                        return(
                              <tr key={i}>
                              <td>{currentTodo.todo_description}</td>
                              <td>{currentTodo.todo_responsible}</td>
                              <td>{currentTodo.todo_priority}</td>
                              <td>
                                 <Link to={"/edit/"+currentTodo._id}>Edit</Link>
                             </td>
                          </tr>
                        ) 
                        }
                        
                         )  }
                         
    
                    </tbody>

                </table>


                
            </div>
        )
    }
}
