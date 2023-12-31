import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Headers from "../../components/Headers";


const Contact = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        {field : 'id', headerName:'ID', flex:0.5}, 
        {field : 'registrarId', headerName:'Registered ID', flex:1},
        {field : 'name', headerName:'NAME', flex : 1, cellClassName : 'name-column--cell'},
        {field : 'age', headerName:'AGE', type:'number', headerAlign : 'left', align:'left'},
        {field : 'phone', headerName:'Phone Number', flex:1},
        {field : 'email', headerName:'EMAIL', flex:1},
        {field : 'address', headerName:'Address', flex:1},
        {field : 'city', headerName:'CITY', flex:1},
        {field : 'zipCode', headerName:'ZIP CODE', flex:1},
    ]

  return (
      <Box
        mt='15px'
        ml = '15px'
      >
         <Headers title='Contact' subtitle='List of Contacts'/>
         <Box
           m="40px 0 0 0"
           height={'75vh'}
           mt='25px'
           sx={{
               "& .MuiDataGrid-root" : {
                    border : 'none'
               },
               "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
                marginBottom : '20px'
              },
           }}
         >
           <DataGrid rows={mockDataContacts} columns={columns} components={{Toolbar : GridToolbar}}/>
         </Box>
      </Box>
  )
}

export default Contact