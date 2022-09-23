import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from 'react';

export default function Machinedetailsform() {

  const navigate = useNavigate()
    const[sr_no,setsr_no] = useState('')
    const [mc_id,setmc_id] = useState('')
    const [name_of_machine,setname_of_machine] = useState('');
    const [make,setmake] = useState('');
    const [code_num,setcode_num] = useState('');
    const [mfd_date,setmfd_date] = useState('');
    
    const [check_me_out,setCheck_me_out] = useState('')
    
     const submitForm = () =>
     {
      axios.post('',{
        sr_no:sr_no,
        mc_id:mc_id,
        name_of_machine:name_of_machine,
        make:make,
        code_num:code_num,
        mfd_date: mfd_date,
       
        check_me_out:check_me_out
      }).then((response)=>{
        alert('Data Inserted')
        navigate('/Machinedetails')
      }).catch((err)=>{
        console.log(err)
      })
     }
  return (
    <div>
        <h1><center>Form</center></h1>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">sr_no</label>
    <input type="text" class="form-control" name='sr_no' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setsr_no(e.target.value)}}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">mc_id</label>
    <input type="text" class="form-control"  name='mc_id' id="exampleInputPassword1" onChange={(e)=>{setmc_id(e.target.value)}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">name_of_machine</label>
    <input type="text" class="form-control"  name='name_of_machine' id="exampleInputPassword1" onChange={(e)=>{setname_of_machine(e.target.value)}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">make</label>
    <input type="text" class="form-control"  name='make' id="exampleInputPassword1" onChange={(e)=>{setmake(e.target.value)}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">code_num</label>
    <input type="text" class="form-control"  name='>code_num' id="exampleInputPassword1" onChange={(e)=>{setcode_num(e.target.value)}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">'mfd_date</label>
    <input type="text" class="form-control"  name='mfd_date' id="exampleInputPassword1" onChange={(e)=>{setmfd_date(e.target.value)}}/>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Add</button>
  <br/>
  <button type="submit" class="btn btn-primary">Update</button>
</form>
    </div>
  )
}
