import React, { Component } from 'react';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state={
        files:[]
     }
    }

    

  showFile = async (e) => {
    e.preventDefault()
   let array=[]
    
    let splitTextfilter; 
  

    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      this.setState({files:text})
    // console.log("que hay en text", text)
      
     var splitText=text.split('*')

     
    // console.log("array",array)

    //console.log("splitText",splitText)
  
     //splitTextfilter = splitText.filter(function(filtro){
      //console.log("filtro ", filtro)
      //return filtro
    //  })
 
    // var reductor = text.split('"')
    // console.log("reductor",reductor)
  
    

     array.push(splitText)
     console.log("esto es split",splitText)
     //  console.log("nuevo filter", splitText1)
     // console.log("this,state" , this.state.files)
      // console.log("string", text.split('*') )
    };
    reader.readAsText(e.target.files[0])
  } 
//_________________________




  render = () => {

    return (
    <div>
      <input type="file"  accept =".txt"  onChange={(e) => this.showFile(e)} />
    </div>
  // <h1>hola</h1>
    )
  }
}

export default Index;