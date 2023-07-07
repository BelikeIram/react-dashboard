import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";


const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      p={2}
    >
       <Box display='flex' justifyContent='center' alignItems='center' backgroundColor={colors.primary[400]}>
         <InputBase placeholder="search" sx={{ml:2, flex:1}}/>
         <IconButton>
            <SearchIcon/>
         </IconButton>
       </Box>
       <Box
         display='flex'
         alignItems='center'
       >
          <IconButton onClick={colorMode.toggleColorMode}>
             {theme.palette.mode === 'dark' ? (
               <LightModeOutlinedIcon/>
             ) : (
               <DarkModeOutlinedIcon/> 
             )}
            
          </IconButton>
          <IconButton>
             <NotificationsOutlinedIcon/>
          </IconButton>
          <IconButton>
              <PersonOutlinedIcon/>
          </IconButton>
          <IconButton>
              <SettingsOutlinedIcon/>
          </IconButton>
       </Box>
    </Box>
  )
}

export default Navbar