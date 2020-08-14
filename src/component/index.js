
//import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';

//import { MDBBtn } from "mdbreact"

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';


class Index extends Component {

  constructor(props) {
    super(props);
    this.state={
        files:[],
        filesDepurado:[],
        nombreVisitor:[]
    }
   
    }
    _export;
    export = () => {
        this._export.save();
    }

  showFile = async (e) => {
   e.preventDefault()
    let json1=[]
    let nombre=[]
    let variable=[]
    let substring=[]


    const reader = new FileReader()
     reader.onload = async (e) => { 
      const text = (e.target.result)
      this.setState({files:text})
     // var splitText=text.split('*')
    let spelit= text.split("\n"). join("")
    let filter= spelit.split("\-"). join("")
   
    let busqueda =filter.split("Created")
    let arrayFilter=[]

    busqueda.map(rows=>{
      arrayFilter.push(rows.split('*'))
    })
   

    let filtro  = []
    
    arrayFilter.map(rows=>{
      filtro.push([rows[1],rows[2],rows[3],rows[4],rows[5],rows[6],rows[7],rows[8]])
     // console.log("filtro",filtro)
    })
    // console.log("esto es filtro",filtro)
    // console.log("esto es busqueda",busqueda) 

let arrayConcat = []

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
   "Telefono":splitTxt7[1]
     
   })
const json = JSON.stringify(list);
var obj = JSON.parse(json);
// var elements= '<'
// nombre=obj.datos[0]..split('<')
//console.log("esto es nombre",splitTxt2)

//console.log("esto es nombre de split",nombre[0])
//onsole.log("esto es splitext de nombre",nombre )
//nombre = splitTxt2[1].split('<')
// variable= nombre[0]
// console.log("esto es varaiable de nombre ",variable)

// substring.push(variable)
variable.push(obj.datos[0].Visitor.split('<'))
nombre= variable
variable.map(rows=>{
  var subtring= rows[0]
  var subtring2= rows[1].replace('>','')
  // console.log("esto es es subtring de nombre de rows",subtring)
  // console.log("esto es es subtring2 de nombre de rows",subtring2)
  var list2={
    'datos':[]
  }
     list.datos.push({
     "nombre":subtring,
     "correo":subtring2,
  })
  
  const json2 = JSON.stringify(list);
  var obj2 = JSON.parse(json2);
  console.log("que contien este json1",obj2)
  
})


// console.log("estos es púsh de variable", nombre)
json1.push(obj.datos)
}
    this.setState({filesDepurado:json1})
   // console.log("json1" , this.state.filesDepurado)

  //  this.setState({nombreVisitor:substring})

})

};
    reader.readAsText(e.target.files[0])

  } 
render () {
    let excel;
     

    if(this.state.filesDepurado[0]){
    excel = <div>
      <MDBContainer style={{width:1700,heigth:1000}}>
     
       <GridToolbar>
                 <button
                     title="Export Excel"
                     className="k-button k-primary"
                     onClick={this.export}
                 >
                     Exportar Excel
             </button>
             </GridToolbar>
            <TableContainer component={Paper}>          
            <Table  aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Department</TableCell>
                    <TableCell align="left">Operator</TableCell>
                    <TableCell align="left">Visitor</TableCell>
                    <TableCell align="left">Duration</TableCell>
                    <TableCell align="left">Empresa</TableCell>
                    <TableCell align="left">Telefono</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.filesDepurado.map(rows => {
                      return( 
                     <ExcelExport data={rows} ref={(exporter) => this._export = exporter}>
                    <TableRow>
                  <TableCell component="th" scope="row">
                    {rows[0].Department}
                      </TableCell>
                      <TableCell >{rows[0].Operator}</TableCell>
                      <TableCell >{rows[0].Visitor}</TableCell>
                      <TableCell >{rows[0].Duration}</TableCell>
                      <TableCell >{rows[0].Empresa}</TableCell>
                      <TableCell >{rows[0].Telefono}</TableCell>
                    </TableRow>
                    </ExcelExport> 

                      )
                  })
                  } 
                </TableBody> 
              </Table>
             </TableContainer>
              
             </MDBContainer>   
             
     </div>   
  }
  
    return (
      <React.Fragment>
           {/* <div>
         <input type="file"  accept =".txt"  onChange={(e) => this.showFile(e)} />
            </div> */}
             {/* <div> 
            <Button
            variant="contained"
           color="primary"
            type="file"
            accept =".txt" 
            startIcon={<CloudUploadIcon />}
       
            //onChange={(e) =>  this.showFile(e)}
            onClick={this.showFile}> 
            cargar Excel
             </Button> 
       </div> 
       */}
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
           {excel}
      </React.Fragment>
    )
  
  }
}
export default Index