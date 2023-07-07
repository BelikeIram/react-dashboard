import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Headers from "../../components/Headers";



const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        {field : 'id', headerName:'ID'},
        {field : 'name', headerName:'NAME', flex : 1, cellClassName : 'name-column--cell'},
        {field : 'phone', headerName:'Phone Number', flex:1},
        {field : 'email', headerName:'EMAIL', flex:1},
        { field : 'cost',
          headerName:'COST',
          renderCell: (params) => {
            return (
              <Typography color={colors.greenAccent[400]}>
                 ${params.row.cost}
              </Typography>
            );
          },
        },
        {field : 'date', headerName:'DATE'},

    ]

  return (
      <Box
        mt='15px'
        ml = '15px'
      >
         <Headers title='INVOICES' subtitle='managing the Invoices'/>
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
           }}
         >
           <DataGrid   checkboxSelection rows={mockDataInvoices} columns={columns}/>
         </Box>
      </Box>
  )
}

export default Invoices