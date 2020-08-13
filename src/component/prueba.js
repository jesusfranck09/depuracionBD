
// import ReactDOM from 'react-dom';
// // import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
// // import { ExcelExport } from '@progress/kendo-react-excel-export';

// import React, { Component } from 'react';

// class Index extends Component {

//   constructor(props) {
//     super(props);
//     this.state={
//         files:[]
//      }
//     }
//     _export;
//     export = () => {
//         this._export.save();
//     }
  

//   showFile = async (e) => {
//     e.preventDefault()
//     const reader = new FileReader()
//     reader.onload = async (e) => { 
//       const text = (e.target.result)
//       this.setState({files:text})
//      // var splitText=text.split('*')
//     let spelit= text.split("\n"). join("")
//     let filter= spelit.split("\-"). join("")
   
//    let busqueda =filter.split("Created")
//    //console.log("esto es busqueda",busqueda)


// //    let eli= filter.join("")
// // console.log("que tiene eliminar",eli)    

//     let arrayFilter=[]

//     busqueda.map(rows=>{
//       arrayFilter.push(rows.split('*'))
//     })

//     let filtro  = []
    
//     arrayFilter.map(rows=>{
//       filtro.push([rows[1],rows[2],rows[3],rows[4],rows[5],rows[6],rows[7],rows[8]])
//      // console.log("filtro",filtro)
//     })
//     // console.log("esto es filtro",filtro)
//     // console.log("esto es busqueda",busqueda) 

//   //let arrayConcat = []

//   filtro.map(rows=> {
//     if(rows[1] &&  rows[7]){
//   //  var remplace = rows[0].replace(/\s\s/, '')  
//     var splitTxt = rows[0].split(':')
//     var splitTxt1 = rows[1].split(':')
//     var splitTxt2 = rows[2].split(':')
//     var splitTxt3 = rows[3].split(':')
//     var splitTxt4 = rows[4].split(':')
//     var splitTxt5 = rows[5].split(':')
//     var splitTxt6 = rows[6].split(':')
//     var splitTxt7 = rows[7].split(':')

//     //  let trim=splitTxt[1].trim()
//     //  console.log("que es trim",trim)


//     // var comilla = '"'
//     // var puntos = ':'
//     //   var bracket = '{'
//     //   var bracketC = '}'
//     //   var comilliSimple ="'"
//     // var concat0 = (bracket).concat(comilla).concat(splitTxt[0]).concat(comilla).concat(puntos).concat(comilla).concat(splitTxt[1]).concat(comilla).concat(bracketC)
//     // var concat1 = (bracket).concat(comilla).concat(splitTxt1[0]).concat(comilla).concat(puntos).concat(comilla).concat(splitTxt1[1]).concat(comilla).concat(bracketC)
//     // // var concat2 = comilla.concat(splitTxt2[0]).concat(comilla).concat(puntos).concat(comilla).concat(splitTxt2[1]).concat(comilla)
//     // var concat3 = comilla.concat(splitTxt3[0]).concat(comilla).concat(puntos).concat(comilla).concat(splitTxt3[1]).concat(comilla)
//     // var concat4 = comilla.concat(splitTxt4[0]).concat(comilla).concat(puntos).concat(comilla).concat(splitTxt4[1]).concat(comilla)
//     // var concat5 = comilla.concat(splitTxt5[0]).concat(comilla).concat(puntos).concat(comilla).concat(splitTxt5[1]).concat(comilla)
//     // var concat6 = comilla.concat(splitTxt6[0]).concat(comilla).concat(puntos).concat(comilla).concat(splitTxt6[1]).concat(comilla)
//     // var concat7 = comilla.concat(splitTxt7[0]).concat(comilla).concat(puntos).concat(comilla).concat(splitTxt7[1]).concat(comilla)
    
// //console.log("esto es concate",concat0)

// //  arrayConcat.push(splitTxt[0],splitTxt[1])
// // // //console.log("esto es concate",arrayConcat)

// //   const json = JSON.stringify(arrayConcat); // aqui tienes la lista de objetos en Json
// // var obj = JSON.parse(json);
// // console.log(obj)


// //    var obj = JSON.stringify(arrayConcat);
// //  //console.log("esto es obj",obj)

// var list={
//   'datos':[]
// }
//    list.datos.push({
//    "Department":splitTxt[1],
//    "Operator":splitTxt1[1],
//    "Visitor":splitTxt2[1],
//    "Duration":splitTxt3[1],
//    "Rating":splitTxt4[1],
//    "Chat ID":splitTxt5[1],
//    "Empresa":splitTxt6[1],
//    "Teléfono":splitTxt7[1]
     
//    })


//   const json = JSON.stringify(list); // aqui tienes la lista de objetos en Json
// var obj = JSON.parse(json);
// //console.log(obj.datos[0].operador)
// console.log(obj)



//     }
//   })

//   // const obj2 = JSON.parse(obj);
//   // console.log("esto es obj",obj2)

//   // arrayConcat.map(rows=>{
  


//   // })

//   // console.log(arrayConcat)
 
 
//   //let inter= .replace(",",":")
// // let array=[]
// //   filtro.map(rows=>{
// //     array.push(rows.join(""))

// //   })
    
//   //  let esp=filtro.join("")
//   //  console.log("esp",esp)

//   //  // let array=[]
//     //     array.push(splitText)
//     // console.log("filtro.split" , filtro.split(':'))
        
        
//     // let array2=[]
//     //     array[0].map(rows=>{
//     //  })
// };
//     reader.readAsText(e.target.files[0])
//   } 
// //_________________________

//   render () {
//     return (
//       <React.Fragment>
//           <div>
//             <input type="file"  accept =".txt"  onChange={(e) => this.showFile(e)} />
//           </div>
//           <div>
//             {/* <ExcelExport
//                 data={products}
//                 ref={exporter => this._export = exporter}
//             >
//                 <Grid data={products} style={{ height: '420px' }}>
//                     <GridToolbar>
//                         <button
//                             title="Export Excel"
//                             className="k-button k-primary"
//                             onClick={this.export}
//                         >
//                             Export to Excel
//                     </button>
//                     </GridToolbar>
//                     <GridColumn field="ProductID" title="Product ID" width="50px" />
//                     <GridColumn field="ProductName" title="Product Name" width="350px" />
//                     <GridColumn field="UnitPrice" title="Price" />
//                     <GridColumn field="UnitsInStock" title="In stock" />
//                     <GridColumn field="Discontinued" title="Discontinued" />
//                 </Grid>
//             </ExcelExport> */}
//           </div> 
      
//       </React.Fragment>
//     )
  
//   }
// }

// export default Index
// //--------------------------------


// import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
// import { ExcelExport } from '@progress/kendo-react-excel-export';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// //import { MDBBtn } from "mdbreact"
// import React, { Component } from 'react';


// class Index extends Component {

//   constructor(props) {
//     super(props);
//     this.state={
//         files:[],
//         filesDepurado:[]
      
       
//      }
   
//     }
//     export;
//     export = () => {
//         this._export.save();
//     }
   
  

//   showFile = async (e) => {

//     e.preventDefault()
//     let json1=[]

//     const reader = new FileReader()
//      reader.onload = async (e) => { 
//       const text = (e.target.result)
//       this.setState({files:text})
//      // var splitText=text.split('*')
//     let spelit= text.split("\n"). join("")
//     let filter= spelit.split("\-"). join("")
   
//     let busqueda =filter.split("Created")
//     let arrayFilter=[]

//     busqueda.map(rows=>{
//       arrayFilter.push(rows.split('*'))
//     })
   

//     let filtro  = []
    
//     arrayFilter.map(rows=>{
//       filtro.push([rows[1],rows[2],rows[3],rows[4],rows[5],rows[6],rows[7],rows[8]])
//      // console.log("filtro",filtro)
//     })
//     // console.log("esto es filtro",filtro)
//     // console.log("esto es busqueda",busqueda) 

// let arrayConcat = []

//  await filtro.map(rows=> {
//     if(rows[1] &&  rows[7]){
//             var splitTxt = rows[0].split(':')
//             var splitTxt1 = rows[1].split(':')
//             var splitTxt2 = rows[2].split(':')
//             var splitTxt3 = rows[3].split(':')
//             var splitTxt4 = rows[4].split(':')
//             var splitTxt5 = rows[5].split(':')
//             var splitTxt6 = rows[6].split(':')
//             var splitTxt7 = rows[7].split(':')
// var list={
//   'datos':[]
// }
//    list.datos.push({
//    "Department":splitTxt[1],
//    "Operator":splitTxt1[1],
//    "Visitor":splitTxt2[1],
//    "Duration":splitTxt3[1],
//    "Rating":splitTxt4[1],
//    "Chat_ID":splitTxt5[1],
//    "Empresa":splitTxt6[1],
//    "Telefono":splitTxt7[1]
     
//    })
// const json = JSON.stringify(list);
//  var obj = JSON.parse(json);
// // console.log(obj.datos[0].Department)
// // console.log(obj.datos[0].Operator)
// // console.log(obj.datos[0].Visitor)
// // console.log(obj.datos[0].Duratio)
// // console.log(obj.datos[0].Rating)
// // console.log(obj.datos[0].ChatID)
// // console.log(obj.datos[0].Empresa)
// // console.log(obj.datos[0].Teléfono)
// //  console.log("esto es object",obj.datos)
//  json1.push(obj.datos)
// //  console.log("json1",json1)
// }
//     this.setState({filesDepurado:json1})
//     // console.log("json1" , this.state.filesDepurado)

// })

// };
//     reader.readAsText(e.target.files[0])

//   } 
// //_________________________

//   render () {
 
//     return (
//       <React.Fragment>
//            <div>
//             <input type="file"  accept =".txt"  onChange={(e) => this.showFile(e)} />
//            {/* <MDBBtn  type="file"  accept =".txt"  onChange={(e) => this.showFile(e)} outline color="info">SUBIR ARCHIVO</MDBBtn> */}
//            </div> 
  
       
//       { this.state.filesDepurado.map(rows=>{
//           // console.log("this.sttae" , rows)
//           return(
//             // <div>
//             // <table>
//             //     <tr> 
//             //      <td >{rows[0].Chat_ID}</td> 
//             //      <td >{rows[0].Department}</td> 
//             //      <td >{rows[0].Duration}</td> 
//             //      <td >{rows[0].Empresa}</td> 
//             //      <td >{rows[0].Operator}</td> 
//             //      <td >{rows[0].Rating}</td> 
//             //      <td >{rows[0].Telefono}</td> 
//             //      <td >{rows[0].Visitor}</td> 
//             //      </tr>
//             //   </table>
//             //   </div>



                  
            
// <ExcelExport
// //ref={exporter => this._export = exporter}
// >
// <Grid
//    // style={{ height: '420px' }}
//   // data={this.state.filesDepurado}
// >
//     <GridToolbar>
//         <button
//             title="Export Excel"
//             //className="k-button k-primary"
//             onClick={this.export}
//         >
//             Export to Excel
//         </button>
//   </GridToolbar>
//           <GridColumn  />
//                 <GridColumn field="Department" title="Department"> departmesn </GridColumn >
//               <GridColumn field="Empresa" title="Empresa" />
//                <GridColumn field="Operator" title="Operator" />
//                <GridColumn field="Rating" title="Rating" />
//                 <GridColumn field="Telefono" title="Telefono" />
//                 <GridColumn field="Visitor" title="Visitor" />
// //</Grid>
// </ExcelExport>

//         //     <div>
//         //     <button className="k-button" onClick={this.export}>Export to Excel</button>

//         //     <ExcelExport
//         //         data={rows[0]}
//         //         fileName="Products.xlsx"
//         //         ref={(exporter) => { this._exporter = exporter; }}
//         //         filterable={true}
//         //     >
//         //         <ExcelExportColumn field="Chat_ID" title="Chat_ID" />
//         //         <ExcelExportColumn field="Department" title="Department" />
//         //         <ExcelExportColumn field="Empresa" title="Empresa" />
//         //         <ExcelExportColumn field="Operator" title="Operator" />
//         //         <ExcelExportColumn field="Rating" title="Rating" />
//         //         <ExcelExportColumn field="Telefono" title="Telefono" />
//         //         <ExcelExportColumn field="Visitor" title="Visitor" />
//         //     </ExcelExport>
//         // </div>
//         <h1>hola</h1>
//         )
//     })}
//       </React.Fragment>
//     )
  
//   }
// }

// export default Index
//_____________
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
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
import CloudUpload from '@material-ui/icons/CloudUpload';
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
    //console.log("json1" , this.state.filesDepurado)

})

};
    reader.readAsText(e.target.files[0])

  } 



  render () {
    let excel;

    if(this.state.filesDepurado[0]){
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
             <GridColumn field="Department" title="Department" width="50px" />
             <GridColumn field="Operator" title="Operator" />
             <GridColumn field="Visitor" title="Visitor" />
             <GridColumn field="Duration" title="Duration" />
             <GridColumn field="Rating" title="Rating" />
             <GridColumn field="Chat_ID" title="Chat_ID" />
             <GridColumn field="Empresa" title="Empresa" />
             <GridColumn field="Telefono" title="Telefono" />
            {this.state.filesDepurado.map(rows=>{
              
              return(
                  <ExcelExport
                  data={rows}
                  ref={exporter => this._export = exporter}
                  
                >
                  
               
                <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {rows.map((rows) => (
            <TableRow key={rows.Chat_ID}>
              <TableCell component="th" scope="row">
               
              </TableCell>
              <TableCell align="right">{rows[0].Department}</TableCell>
              <TableCell align="right">{rows[0].Operator}</TableCell>
              <TableCell align="right">{rows[0].Visitor}</TableCell>
              <TableCell align="right">{rows[0].Duration}</TableCell>
              <TableCell align="right">{rows[0].Rating}</TableCell>
              <TableCell align="right">{rows[0].Chat_ID}</TableCell>
              <TableCell align="right">{rows[0].Empresa}</TableCell>
              <TableCell align="right">{rows[0].Telefono}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
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
            startIcon={<CloudUploadn />}
       
            onChange={(e) => this.showFile(e)}> 
            cargar Excel
             </Button> 
       </div> */}
      
          
           {excel}
      </React.Fragment>
    )
  
  }
}
export default Index


////-----------------------------
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
                     <ExcelExport data={rows} ref={exporter => this._export = exporter}>
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
          startIcon={<CloudUploadIcon />}

        >
          Cargar .txt
          <input
            type="file"
            accept =".txt"
            style={{ display: "none" }}
            accept =".txt"  onChange={(e) => this.showFile(e)}
          />
        </Button>
           {excel}
      </React.Fragment>
    )
  
  }
}
export default Index