import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

export const Registration = () => {
  return (
    <div style={{marginTop:"88px"}}>
        
        
        
        <Typography varient='h4'>Registration Form</Typography><br/>
        <TextField label="Enter name" varient="outlined"/><br/><br/>
        <TextField type='password' label="Enter password" varient="outlined"/><br/><br/>
        <TextField type='number' label="Enter phone number" varient="outlined"/><br /><br />
        <TextField label="Enter Address" varient="outlined"/><br /><br />
        <Button varient="contained" color="error">Registration form</Button>

    </div>
  );
}
