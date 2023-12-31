import React from 'react'
import LineChart from '../../components/LineChart'
import {Box} from '@mui/material'
import Headers from '../../components/Headers'

const Line = () => {
    return (
        <Box m='20px'>
        <Headers title="Line Chart" subtitle="Simple Line Chart" />
        <Box height="75vh">
          <LineChart />
        </Box>
        </Box>
      )
}

export default Line