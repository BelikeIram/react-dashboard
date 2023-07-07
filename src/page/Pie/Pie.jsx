import React from 'react'
import PieChart from '../../components/PieChart'
import {Box} from '@mui/material'
import Headers from '../../components/Headers'

const Pie = () => {
  return (
    <Box m='20px'>
    <Headers title="Pie Chart" subtitle="Simple Pie Chart" />
    <Box height="75vh">
      <PieChart />
    </Box>
    </Box>
  )
}

export default Pie