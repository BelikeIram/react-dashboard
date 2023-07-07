import React from 'react'
import BarChart from '../../components/BarChart'
import {Box} from '@mui/material'
import Headers from '../../components/Headers'


const Bar = () => {
  return (
    <Box m='20px'>
    <Headers title="Bar Chart" subtitle="Simple Bar Chart" />
    <Box height="75vh">
      <BarChart />
    </Box>
    </Box>
  )
}

export default Bar