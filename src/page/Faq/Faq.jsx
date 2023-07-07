import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'
import {tokens} from '../../theme'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Headers from '../../components/Headers'

const Faq = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
  return (
    <Box m={'20px'}>
    <Headers title="FAQ" subtitle="Frequently Asked Questions Page" />
       <Box mt='20px'>
        <Accordion >
             <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                 <Typography variant='h5' color={colors.greenAccent[500]}>
                    An Important question
                 </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
               </Typography>
             </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant='h5' color={colors.greenAccent[500]}>
               An Important question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
             malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
   </Accordion>
   <Accordion>
   <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
       <Typography variant='h5' color={colors.greenAccent[500]}>
          An Important question
       </Typography>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
     </Typography>
   </AccordionDetails>
</Accordion>
<Accordion>
<AccordionSummary expandIcon={<ExpandMoreIcon/>}>
    <Typography variant='h5' color={colors.greenAccent[500]}>
       An Important question
    </Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
     malesuada lacus ex, sit amet blandit leo lobortis eget.
  </Typography>
</AccordionDetails>
</Accordion>
<Accordion>
<AccordionSummary expandIcon={<ExpandMoreIcon/>}>
    <Typography variant='h5' color={colors.greenAccent[500]}>
       An Important question
    </Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
     malesuada lacus ex, sit amet blandit leo lobortis eget.
  </Typography>
</AccordionDetails>
</Accordion>
<Accordion>
<AccordionSummary expandIcon={<ExpandMoreIcon/>}>
    <Typography variant='h5' color={colors.greenAccent[500]}>
       An Important question
    </Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
     malesuada lacus ex, sit amet blandit leo lobortis eget.
  </Typography>
</AccordionDetails>
</Accordion>
  </Box>
    </Box>
  )
}

export default Faq