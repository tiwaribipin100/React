import React, { Component } from 'react'
import axios from 'axios';


 
export default class Search extends Component {

    constructor(props){
        super(props);
        this.state={

            todo_des:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false,

            todos:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/todo/')
        .then(response =>{
            
            this.setState({
                todos:response.data
            });
            
        })

    }

    onchangeSearch=(event)=>{
        this.setState({
            todo_des: event.target.value
        })
    }

    onSubmitForm=(event)=>{

        event.preventDefault();

    }
    render() {
        return (
            <div className="container m-2" style={{marginTop:30}}>
            
            <div className="col-lg-8 m-auto d-block bg-light" style={{marginTop:20}}>
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label>Search:</label>
                        <input type="text" className="form-control" value={this.state.todo_des} onChange={this.onchangeSearch}></input>
                    </div>

                    
                </form>

                </div>

                <center style={{marginTop:10}}><h3>Todo List</h3></center>
                <center>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {/* { this.todoLists} */}
                   
                    
                    {  this.state.todos.filter(des => des.todo_description === this.state.todo_des ).map(function(currentTodo,i){
                        return(
                              <tr key={i}>
                              <td>{currentTodo.todo_description}</td>
                              <td>{currentTodo.todo_responsible}</td>
                              <td>{currentTodo.todo_priority}</td>
                              
                          </tr>
                        ) 
                        }
                        
                         )  }
                         
    
                    </tbody>

                </table>
                </center>

                </div>
        )
    }
}

