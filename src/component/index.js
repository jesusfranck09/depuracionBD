
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


class Index extends Component {

  constructor(props) {
    super(props);
    this.state={
        files:[],
        filesDepurado:[]
    }
   
    }
    _export;
    export = () => {
        this._export.save();
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
 json1.push(obj.datos)

}
    this.setState({filesDepurado:json1})
   // console.log("json1" , this.state.filesDepurado)

})

};
    reader.readAsText(e.target.files[0])

  } 
render () {
    let excel;

    if(this.state.filesDepurado[0]){
      console.log("object",this.state.filesDepurado)
    excel = <div>
       <GridToolbar>
                 <button
                     title="Export Excel"
                     className="k-button k-primary"
                     onClick={this.export}
                 >
                     Exportar Excel
             </button>
             </GridToolbar>
              <GridColumn field="Department" title="Department"  />
             <GridColumn field="Operator" title="Operator" />
             <GridColumn field="Visitor" title="Visitor" />
             <GridColumn field="Duration" title="Duration" />
             <GridColumn field="Rating" title="Rating" />
             <GridColumn field="Chat_ID" title="Chat_ID" />
             <GridColumn field="Empresa" title="Empresa" />
             <GridColumn field="Telefono" title="Telefono" /> 
            {this.state.filesDepurado.map(rows=>{
             
              
            return(
            <ExcelExport data={rows} ref={exporter => this._export = exporter}>
            <TableContainer component={Paper}>
              
     <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Operator</TableCell>
            <TableCell align="right">Visitor</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Chat_ID</TableCell>
            <TableCell align="right">Empresa</TableCell>
            <TableCell align="right">Telefono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.filesDepurado.map((rows) => (
               
            <TableRow key={rows[0].Department}>
             <TableCell omponent="th" scope="row">
             {rows[0].Department}
               </TableCell>
              <TableCell >{rows[0].Department}</TableCell>
              <TableCell >{rows[0].Operator}</TableCell>
              <TableCell >{rows[0].Visitor}</TableCell>
              <TableCell >{rows[0].Duration}</TableCell>
              <TableCell>{rows[0].Rating}</TableCell>
              <TableCell >{rows[0].Chat_ID}</TableCell>
              <TableCell >{rows[0].Empresa}</TableCell>
              <TableCell >{rows[0].Telefono}</TableCell>
            </TableRow>
          ))
          } 
        </TableBody> 
      </Table>
    </TableContainer>  
              </ExcelExport> 
              )
            })}
     </div>   
  }
  
    return (
      <React.Fragment>
           <div>
         <input type="file"  accept =".txt"  onChange={(e) => this.showFile(e)} />
            </div>
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
          
           {excel}
      </React.Fragment>
    )
  
  }
}
export default Index