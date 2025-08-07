import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function () {
  const navigate = useNavigate()
  const[id,setid] = useState('')
  const [shift,setshift] = useState('')
  const [empId,setempId] = useState('');
  const [empName,setempName] = useState('');
  const [remark,setremark] = useState('');
  const [date,setdate] = useState('');

  const [check_me_out,setCheck_me_out] = useState('')
  
   const submitForm = () =>
   {
    axios.post('',{
      id:id,
      
      shift:shift,
      empId:empId,1234
      empName:empName,
      remark:remark,
      date:date,
      check_me_out:check_me_out
    }).then((response)=>{
      alert('Data Inserted')
      navigate('/Viewattendance')
    }).catch((err)=>{
      console.log(err)
    })
   }
 
  
  return (
    <div>
    <h1><center>Add Attendance</center></h1>

    

    <div class="mb-3">


  
    <label for="exampleInputEmail1" class="form-label">id</label>
    <input type="text" class="form-control" name='id' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setid(e.target.value)}}/>
    
  </div>
  <div class="mb-3">


  
    <label for="exampleInputEmail1" class="form-label">shift</label>
    <input type="text" class="form-control" name='shift' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setshift(e.target.value)}}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">empId</label>
    <input type="text" class="form-control" name='empId' id="exampleInputPassword1" onChange={(e)=>{setempId(e.target.value)}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">empName</label>
    <input type="text" class="form-control" name='empName' id="exampleInputPassword1" onChange={(e)=>{setempName(e.target.value)}}/>
  </div>



  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">remark</label>
    <input type="text" class="form-control" name='remark' id="exampleInputPassword1" onChange={(e)=>{setremark(e.target.value)}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">date</label>
    <input type="text" class="form-control" name='date' id="exampleInputPassword1" onChange={(e)=>{setdate(e.target.value)}}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" name='check_me_out' id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button  onClick={submitForm} class="btn btn-primary">Add</button>
  <br/>
  <button  class="btn btn-primary">Update</button>
    </div>
  )
}
