import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
        className='Search'
      component="form"
    
      noValidate
      autoComplete="off"
    >
      <TextField className='Search1' id="outlined-basic" label="Search..." variant="outlined" />
    </Box>
  );
}
