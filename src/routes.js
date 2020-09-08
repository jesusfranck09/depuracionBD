import React,{Component} from 'react';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'

import './App.css';
import index from './component/index'

class App extends Component{

render(){
  return(

    <Router>
    <Switch>
    <main>    
        <Route exact path = "/" component ={index}/>         
    </main>
    </Switch>          
    </Router>
  )
}
}
export default App