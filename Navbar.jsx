import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
<Box>
    <AppBar>
        <Toolbar>
            <Typography>
                Student Application
            </Typography>
            <Button color="inherit" ><Link to ='/' style={{color:'white',textDecoration:'none'}}>View</Link></Button>
            <Button color="inherit"><Link to ='/Add' style={{color:'white',textDecoration:'none'}}> Add </Link></Button>
        </Toolbar> 
    </AppBar>
</Box>



    </div>
  )
}

export default Navbar