
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{marginTop:"88px"}}>
        
        
        
        <Typography variant='h4'>Login page</Typography><br/>
        <TextField label="Enter name" variant="outlined"/><br/><br/>
        <TextField label="Enter password" type="password" variant="outlined"/><br/>
        <Button varient="contained" color="error">Log In</Button>
    </div>
    

  )
}

export default Login