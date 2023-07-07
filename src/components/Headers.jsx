import React from 'react'
import {Box, useTheme, Typography} from '@mui/material'
import { tokens } from '../theme'

const Headers = ({title,subtitle}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box ml='15px' mb='20px'>
           <Typography
              variant='h2' 
              color={colors.grey[100]}
              fontWeight='bold'
              sx={{mb: '5px'}}
            >{title}</Typography>
           <Typography variant='h5' color={colors.greenAccent[500]}>{subtitle}</Typography>
    </Box>
  )
}

export default Headers