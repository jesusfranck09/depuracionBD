import React, { useState } from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';




    function Tabla() {
        const [responsive, setResponsive] = useState("vertical");
        const [tableBodyHeight, setTableBodyHeight] = useState("400px");
        const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
      
        const columns = ["Nombre", "Titulo", "Location"];
      
        const options = {
          filter: true,
          filterType: "dropdown",
          responsive,
          tableBodyHeight,
          tableBodyMaxHeight
        };
      
        const data = [
          ["Gabby George", "Business Analyst", "Minneapolis"],
          [
            "Aiden Lloyd",
            "Business Consultant for an International Company and CEO of Tony's Burger Palace",
            "Dallas"
          ],
          ["Jaden Collins", "Attorney", "Santa Ana"],
          ["Franky Rees", "Business Analyst", "St. Petersburg"],
          ["Aaren Rose", null, "Toledo"],
          ["Johnny Jones", "Business Analyst", "St. Petersburg"],
          ["Jimmy Johns", "Business Analyst", "Baltimore"],
          ["Jack Jackson", "Business Analyst", "El Paso"],
          ["Joe Jones", "Computer Programmer", "El Paso"],
          ["Jacky Jackson", "Business Consultant", "Baltimore"],
          ["Jo Jo", "Software Developer", "Washington DC"],
          ["Donna Marie", "Business Manager", "Annapolis"]
        ];


  


 
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

        <FormControl>
        <InputLabel id="demo-simple-select-label">Responsive Option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={responsive}
          style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
          onChange={e => setResponsive(e.target.value)}
        >
          <MenuItem value={"vertical"}>vertical</MenuItem>
          <MenuItem value={"standard"}>standard</MenuItem>
          <MenuItem value={"simple"}>simple</MenuItem>

          <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
          <MenuItem value={"scrollMaxHeight"}>
            scrollMaxHeight (deprecated)
          </MenuItem>
          <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Table Body Height</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tableBodyHeight}
          style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
          onChange={e => setTableBodyHeight(e.target.value)}
        >
          <MenuItem value={""}>[blank]</MenuItem>
          <MenuItem value={"400px"}>400px</MenuItem>
          <MenuItem value={"800px"}>800px</MenuItem>
          <MenuItem value={"100%"}>100%</MenuItem>
        </Select>
      </FormControl>
      <MUIDataTable
        title={"ACME Employee list"}
        data={data}
        columns={columns}
        options={options}
      />

       
        </React.Fragment>

    )
   
}export default Tabla
