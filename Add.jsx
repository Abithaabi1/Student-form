import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = (props) => {
    var [input,setInput]=useState(props.data)
    console.log(props.data)


    const inputHandler =(e)=>{
        const{name,value}=e.target
        setInput({ ...input,[name]:value})
    }
    const readValues =() =>{
    console.log("clicked")//whenver butten clicked it will show in console
if(props.method ==="post"){

    axios.post("http://localhost:3005/students",input)//only in post method we pass 
    .then(response => {
        alert("Sucessfully added")
    })
    .catch((err)=>{console.log(err)})
    }
    else if(props.method ==="put"){
      axios.put("http://localhost:3005/students/"+input.id,input)
      .then(response=>{
        alert("Updated Successfully")
        window.location.reload(false)
      })
      .catch(err=>console.log(err))
    }
  }

  return (
    <div>
<br></br>
<br></br>
<br></br>
<br></br>
    
<br/>
    <TextField  label="Name" name='name'  variant="outlined"
    value={input.name}onChange={inputHandler} />
    <br/>
    <br/>
    <TextField  label="Grade" name='grade' variant="outlined"
    value={input.grade} onChange={inputHandler} />
    <br/>
    <br/>
    <Button variant="contained"  onClick={readValues}color="success">
  SUBMIT
  <br/>
</Button>

    </div>
  )
}

export default Add