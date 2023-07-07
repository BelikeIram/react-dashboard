import React from 'react'
import Geography from '../../components/Geography'
import {Box} from '@mui/material'
import Headers from '../../components/Headers'
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Geo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m='20px'>
    <Headers title="Geo Chart" subtitle="Simple Geo Chart" />
    <Box height="72vh" border={`1px solid ${colors.grey[100]}`}>
      <Geography />
    </Box>
    </Box>
  )
}

export default Geo