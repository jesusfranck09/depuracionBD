import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import MUIDataTable from "mui-datatables";
import React, { Component } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';
import {MDBContainer,MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
        filesDepurado:[],
        spinner:false,
        modal12: false
   }
   this.export= this.export.bind(this) 
       }
       getMuiTheme = () => createMuiTheme({
        overrides: {
          MUIDataTableBodyCell: {
              root: {              
              fontFamily : 'arial' ,
              fontSize: '14px',               
              textAlign:"center",
            },          
          },
          MUIDataTableHeadCell: {
            root: {         
              fontSize: '16px',
              textAlign:"center",
            }
          },
                           
        }
        })
    abrirModal=()=>{
      this.setState({modal:this.state.modal})
    }
    showFile = async (e) => {
    e.preventDefault()
    this.setState({spinner:true})
    let json1=[]
    const reader = new FileReader()
    reader.onload = async (e) => { 
    const text = (e.target.result)  
    let splitText=text.split('*')
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
      })
  await filtro.map(rows=> {
      if(rows[1] &&  rows[7]){
              var splitTxt = rows[0].split(':')
              var splitTxt2 = rows[2].split(':')     
              var splitTxt5 = rows[5].split(':')
              var splitTxt6 = rows[6].split(':')
              var splitTxt7 = rows[7].split(':')
              var splitTxt8 = rows[8].split('&nbsp;')              
        var list={
          'datos':[]
        }
          list.datos.push({
                "Department":splitTxt[1],  
                "Visitor":splitTxt2[1],
                "Chat_ID":splitTxt5[1],
                "Empresa":splitTxt6[1],
                "Telefono":splitTxt7[1],
                "Poliza":splitTxt8    
          })
      const json = JSON.stringify(list);
      var obj = JSON.parse(json);
      json1.push(obj.datos)
           }
      this.setState({filesDepurado:json1})
      this.render(json1)
      })
      this.setState({ spinner:false})
      };
      reader.readAsText(e.target.files[0])
        }      
      modal(dataChat){
        console.log("dataChat" , dataChat)
        this.setState({modal12:true})
      }
      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
   
render() {
  let modal;
  const columns = [ "Departamento","Cliente","Correo Cliente","Chat_ID","Empresa","Telefono",{name:"Chat", options:{filter: false, sort:false,download:false}}]; 
  const  data=this.state.filesDepurado.map((rows,i)=>{
    let boton = <div><MDBBtn size="sm"  onClick={(e)=>this.modal(rows[0].Poliza)}>Chat</MDBBtn></div> 
        modal= <MDBContainer>
        <MDBModal size="lg" isOpen={this.state.modal12} >
          <MDBModalHeader >Chat</MDBModalHeader>
          <font   size="1" face="arial">
          <MDBModalBody>
            {rows[0].Poliza}
          </MDBModalBody> 
          </font>
          <MDBModalFooter>
            <MDBBtn color="secondary" size="sm" onClick={(e) => this.setState({modal12:false})}>Cerrrar</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
        let caracter_menor=rows[0].Visitor.indexOf('<')
        let nombre_visitor=rows[0].Visitor
        let substring_nombre=rows[0].Visitor.substring(caracter_menor,nombre_visitor)

        let menor= rows[0].Visitor.indexOf('<')
        let mayor = rows[0].Visitor.indexOf('>')
        let substring_correo=rows[0].Visitor.substring(menor,mayor)
        let substrig=substring_correo.substring(1)

        let caracteres_especiales=rows[0].Department.replace("ó", "o")
        let Empresa=rows[0].Empresa.replace("é", "e")
        let empresa2=Empresa.replace("ñ", "n")
        let empresa3=empresa2.replace("á", "a")
        let empresa4=empresa3.replace("ú", "u")
        let Telefono=rows[0].Telefono.slice(0, 11)
       console.log("esto es caracteres especiales ",caracteres_especiales)
 return([caracteres_especiales,substring_nombre,substrig,rows[0].Chat_ID,empresa4,Telefono,boton])  
  })

 let contador=[]
 contador=this.state.filesDepurado.length

//  for (i=0;i<contador;i++){ 
//   console.log("contador",contador[i])
// }
 
  
//let contador=this.state.filesDepurado.lenght

    let spinner;
    if(this.state.spinner==true){
      spinner=<div class="spinner-border spinner-border-sm" role="status">
      <span class="sr-only">Loading...</span>
    </div>
      } 
         const options={       
      filterType:"drowpdawn",
      responsive: "stacked",
      rowHover:"true",
      textLabels:{
        body: {
          noMatch: "Lo sentimos, no se encontraron registros coincidentes",
          toolTip: " Ordenar",
          columnHeaderTooltip: column => `Sort for ${column.label}`
        },
        pagination: {
          next: "Página siguiente",
          previous: "Página anterior",
          rowsPerPage: "Filas por página:",
          displayRows: "de",
        },
        toolbar: {
          search: "Buscar",
          downloadCsv: " Descargar CSV",
          print: "Imprimir ",
          viewColumns: "Ver columnas",
          filterTable: "Tabla de filtros",
        },
        filter: {
          all: "Todos",
          title: "FILTROS",
          reset: "RESET",
        },
        viewColumns: {
          title: "Mostrar columnas",
          titleAria: "Mostrar / Ocultar columnas de tabla",
        },
        selectedRows: {
          text: "fila (s) seleccionadas",
          delete: "Eliminar",
          deleteAria: "Eliminar filas seleccionadas",
        },       
      }     
      } 
     
   return (
      <React.Fragment>   
             <Button
          style={{margin:30}}
          variant="outlined"
          color="primary"
          component="label"
          accept =".txt"
          startIcon={<CloudUploadIcon/>}
        >
           Cargar.txt 
           &nbsp;
           <input
            type="file"
            accept =".txt"
            style={{ display: "none" }}
            onChange={(e) => this.showFile(e)} 
          />
         {spinner} {contador}
        </Button>     
        <div style={{width:1300,margin:40}} > 
          <MuiThemeProvider  theme={this.getMuiTheme()}>        
            <MUIDataTable             
              title={"lista"}
              data={data}
              columns={columns} 
              options={options}>
            </MUIDataTable>      
          </MuiThemeProvider>      
        </div>            
      {modal}
      </React.Fragment>  
    )  
  }
}
export default Index