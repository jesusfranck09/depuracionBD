import React,{Component} from 'react';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'

import './App.css';
import index from './component/index'
import table from './component/table'

class App extends Component{

render(){
  return(

    <Router>
    <Switch>
    <main>
    
        <Route exact path = "/" component ={index}/>   
        <Route exact path = "/table" component= {table}/>
    </main>
    </Switch>          
    </Router>
  )
}
}
export default App