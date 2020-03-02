import {Link} from 'react-router-dom'
import "./navbar.css"
import React, { Component } from 'react'
 class navbar extends Component {

    render() {
        return (
            <div>
               <button>
                   
                   <Link to='/'>Search</Link>
               </button>
               <button>
                   <Link to='/Saved'>Saved</Link>
               </button>
            </div>
        )
    }
}

export default navbar