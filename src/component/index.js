
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import MUIDataTable from "mui-datatables";
import React, { Component } from 'react';//import Tabla from './table';
import { render } from '@testing-library/react';


class Index extends Component {

  constructor(props) {
    super(props);
    this.state={
        filesDepurado:[],

    }
   
    }
    _exporter;
    export = () => {
        this._exporter.save();
    }
   
  
     
  showFile = async (e) => {
   e.preventDefault()
    let json1=[]
    
    

    const reader = new FileReader()
     reader.onload = async (e) => { 
      const text = (e.target.result)
     // var splitText=text.split('*')
    let spelit= text.split("\n").join("")
    let filter= spelit.split("\-").join("")
   
    let busqueda =filter.split("Created")
    let arrayFilter=[]

    busqueda.map(rows=>{
      arrayFilter.push(rows.split('*'))
    })
   
    let filtro  = []
     arrayFilter.map(rows=>{
     filtro.push([rows[1],rows[2],rows[3],rows[4],rows[5],rows[6],rows[7],rows[8],rows[9]])
     
      //console.log("filtro",filtro)
    })


 await filtro.map(rows=> {
    if(rows[1] &&  rows[7]){
            var splitTxt = rows[0].split(':')
            var splitTxt1 = rows[1].split(':')
            var splitTxt2 = rows[2].split(':')
            var splitTxt3 = rows[3].split(':')
            var splitTxt4 = rows[4].split(':')
            var splitTxt5 = rows[5].split(':')
            var splitTxt6 = rows[6].split(':')
            var splitTxt7 = rows[7].split(':')
          //  var splitTxt8 = rows[8].split(':')
           
var list={
  'datos':[]
}
   list.datos.push({
  "Department":splitTxt[1],
 "Operator":splitTxt1[1],
 "Visitor":splitTxt2[1],
 "Duration":splitTxt3[1],
 "Rating":splitTxt4[1],
 "Chat_ID":splitTxt5[1],
    "Empresa":splitTxt6[1],
   "Telefono":splitTxt7[1],
   //"poliza":splitTxt8[1]
     
   })
const json = JSON.stringify(list);
var obj = JSON.parse(json);
json1.push(obj.datos)
// console.log("estpos es obj",json1)
}
    this.setState({filesDepurado:json1})
})

};
 reader.readAsText(e.target.files[0])
  } 

  
render () {


  const columns = [ "Departamento","Operador","Visitor","Correo_V","Duracion","Rating","Chat_ID","Empresa","Telefono"];
  const data=this.state.filesDepurado.map((rows,i)=>{
    let caracter_menor=rows[0].Visitor.indexOf('<')
    let nombre_visitor=rows[0].Visitor
    let substring_nombre=rows[0].Visitor.substring(caracter_menor,nombre_visitor)
  //console.log("esto es subtring de nombre",substring_nombre)
                          
    let menor= rows[0].Visitor.indexOf('<')
    let mayor = rows[0].Visitor.indexOf('>')
    let substring_correo=rows[0].Visitor.substring(menor,mayor)
    let substrig=substring_correo.substring(1)
  //console.log("estos es subtring_correo",substrg)


    return([rows[0].Department,rows[0].Operator,substring_nombre,substrig,rows[0].Duration,rows[0].Rating,rows[0].Chat_ID,rows[0].Empresa,rows[0].Telefono])

       
  })

  
    return (
      <React.Fragment>
      <Button
          style={{margin:40}}
          variant="outlined"
          color="primary"
          component="label"
          accept =".txt"
          startIcon={<CloudUploadIcon />}

        >
          Cargar .txt
          <input
            type="file"
            accept =".txt"
            style={{ display: "none" }}
              onChange={(e) => this.showFile(e)}
          />
        </Button>
                  
                   <MUIDataTable
            title={"lista"}
            
            data={data}
            columns={columns}
          // options={options}
          /> 

      </React.Fragment>
    )
  
  }
}
export default Index
