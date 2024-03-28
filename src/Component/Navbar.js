import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div>
                <ul className="nav nav-pills bg-dark align-items-center" style={{height:50}}>
                    <li className="nav-item "><Link to="/" className="nav-link font-weight-bold text-white">TodoList</Link></li>
                    <li className="nav-item "><Link className="nav-link" to="/">List</Link></li>
                    <li className="nav-item"><Link to="/create" className="nav-link">Create Todo</Link></li>
                    <li className="nav-item"><Link to="/search" className="nav-link">Search</Link></li>
                    <li className="nav-item"><Link to="/msearch" className="nav-link">ManualSearch</Link></li>
                    
                    


                </ul>


            </div>

        )
    }


}

export default Navbar;