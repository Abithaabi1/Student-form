import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const View = () => {
    var[update,setUpdate]=useState(false)
    var[selected,setSelected]=useState([])
    var[students,setStudents] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(response=>{setStudents(students=response.data)
        console.log(students)
    })
    .catch(error=>console.log(error))
        
    },[])
    const deleteValues =(id)=>{
        console.log("delete clicked"+id)
        axios.delete("http://localhost:3005/students/"+id)
        .then(response =>{
          console.log(response.idvalue)
          alert("suceessfully deleted")
          window.location.reload(false)
        })
      }
      
      const updateValue=(value)=>{
        setSelected(value)
        setUpdate(true)
      }

      var finalJSX= <TableContainer>

      <Table>
          <TableHead>
              <TableRow>
                  <TableCell>
                      Id
                  </TableCell>
                  <TableCell>
                      Name
                  </TableCell>
                  <TableCell>
                      Grade
                  </TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {students.map((value,index)=>{
                  return <TableRow>
                      <TableCell>
                          {value.id}
                       </TableCell>
                       <TableCell>
                          {value.name}
                       </TableCell>
                       <TableCell>
                          {value.grade}
                       </TableCell>
                       <TableCell> <Button onClick={()=>updateValue(value)}>UPDATE</Button></TableCell>
                       <Button
                    color='error'
                    onClick={()=>deleteValues(value.id)}>DELETE</Button>
                   
                  </TableRow>
              })}
          </TableBody>
      </Table>
      
          </TableContainer>
    if(update)
    finalJSX=<Add data={selected} method="put" />  
      
  return (
    finalJSX
  )
}

export default View