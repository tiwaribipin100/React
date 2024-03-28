import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link ,Route, Switch, BrowserRouter } from 'react-router-dom';
import TodoList from './Component/TodoList';
import CreateTodo from './Component/CreateTodo';
import EditTodo from './Component/EditTodo';
import Navbar from './Component/Navbar';
import Search from './Component/Search';
import ManualSearch from './Component/ManualSearch';

function App() {
  return (
    
    <div >
      <Navbar/>
      <Switch>

      <Route path="/" exact component={TodoList}/>
      <Route path="/edit/:id"  component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/>
      <Route path="/search" component={Search}/>
      <Route path="/msearch" component={ManualSearch}/>

      </Switch>
    </div>
    
  );
}

export default App;
