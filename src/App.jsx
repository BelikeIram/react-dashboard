import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider, Box } from '@mui/material'
import Navbar from './page/global/Navbar'
import GlobalSidebar from "./page/global/GlobalSidebar";
import Dashboard from "./page/dashboard/Dashboard";
import './app.scss'
import Team from "./page/team/Team";
import Invoices from "./page/invoices/Invoices";
import Contacts from "./page/contact/Contact";
import Bar from "./page/Bar/Bar";
import Form from "./page/form/Form";
import Line from "./page/Line/Line";
import Pie from "./page/Pie/Pie";
import Faq from "./page/Faq/Faq";
import Geo from "./page/Geography/Geo";
import Calendar from "./page/calendar/Calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
            <div className='app'>
               <GlobalSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
               <Box className={`content ${isCollapsed ? 'clash_in' : ''} `}>
                 <Navbar/>
                 <Routes>
                 <Route path="/" element={<Dashboard />} />
                 <Route path="/team" element={<Team />} />
                 <Route path="/contacts" element={<Contacts />} />
                 <Route path="/invoices" element={<Invoices />} />
                 <Route path="/form" element={<Form />} />
                 <Route path="/calendar" element={<Calendar />} />
                 <Route path="/faq" element={<Faq/>} />
                 <Route path="/bar" element={<Bar />} />
                 <Route path="/pie" element={<Pie />} />
                 <Route path="/line" element={<Line />} />
                 <Route path="/geography" element={<Geo />} /> 
               </Routes>
               </Box>
            </div> 
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
