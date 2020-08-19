//import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import { Grid, GridColumn, GridToolbar, GridCell } from '@progress/kendo-react-grid';
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
        this._export.save()
    }
   
     
  showFile = async (e) => {
   e.preventDefault()
    let json1=[]

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
     
      //console.log("filtro",filtro)
    })


 await filtro.map(rows=> {
    if(rows[1] &&  rows[7]){
            // var splitTxt = rows[0].split(':')
            // var splitTxt1 = rows[1].split(':')
            // var splitTxt3 = rows[3].split(':')
            // var splitTxt4 = rows[4].split(':')
            // var splitTxt5 = rows[5].split(':')
            var splitTxt2 = rows[2].split(':')
            var splitTxt6 = rows[6].split(':')
            var splitTxt7 = rows[7].split(':')
           
var list={
  'datos':[]
}
   list.datos.push({
 //  "Department":splitTxt[1],
 // "Operator":splitTxt1[1],
 // "Visitor":splitTxt2[1],
 // "Duration":splitTxt3[1],
 // "Rating":splitTxt4[1],
 // "Chat_ID":splitTxt5[1],
   "Visitor":splitTxt2[1],
   "Empresa":splitTxt6[1],
   "Telefono":splitTxt7[1]
     
   })
const json = JSON.stringify(list);
var obj = JSON.parse(json);
json1.push(obj.datos)
}
    this.setState({filesDepurado:json1})
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
                     <TableCell>Correo</TableCell>
                    <TableCell>Nombre</TableCell>
                   <TableCell>Empresa</TableCell>
                    <TableCell>Telefono</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                
                  {this.state.filesDepurado.map(rows => {
                      let caracter_menor=rows[0].Visitor.indexOf('<')
                      let nombre_visitor=rows[0].Visitor
                      let subtring_nombre=rows[0].Visitor.substring(caracter_menor,nombre_visitor)
                     // console.log("esto es subtring de nombre",subtring_nombre)
                                            
                      let menor= rows[0].Visitor.indexOf('<')
                      let mayor = rows[0].Visitor.indexOf('>')
                      let subtring_correo=rows[0].Visitor.substring(menor,mayor)
                      let sbstrg=subtring_correo.substring(1)
                      console.log("estos es subtring_correo",sbstrg)
                      //if(sbstrg && subtring_nombre && rows[0].Empresa && rows[0].Telefono)
                      return( 
                        


                     <ExcelExport data={rows} ref={(exporter) => this._export = exporter}>
                  
                  <GridColumn field="correo" />
            <GridColumn field="nombre" />
            <GridColumn field="empresa" />
            <GridColumn field="telefono" />
            <GridToolbar field= {sbstrg} />
        
                    <TableRow >
                      <TableCell component="th" scope="row"> {sbstrg} </TableCell>
                      <TableCell  >{subtring_nombre}</TableCell>
                      <TableCell  >{rows[0].Empresa}</TableCell>
                      <TableCell  >{rows[0].Telefono}</TableCell>
                     
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