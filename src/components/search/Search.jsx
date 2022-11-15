import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="outlined-search" label="Search" type="search" size="small" />
    </Box>
  );
}
