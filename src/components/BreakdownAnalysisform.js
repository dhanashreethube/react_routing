
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
export default function BreakdownAnalysisform() {
  

   
    const navigate = useNavigate()
    const[sr_no,setsr_no] = useState('')
    const [mc_id,setmc_id] = useState('')
    const [date,setdate] = useState('');
    const [shift,setshift] = useState('');
    const [bdtime,setbdtime] = useState('');
    const [bdhrs,setbdhrs] = useState('');
    const [natureofbreakedown,setnatureofbreakedown] = useState('');
    const [actiontaken,setactiontaken] = useState('');
    const [spearused,setspearused] = useState('');
    const [sprearcost,setsprearcost] = useState('');
    const [techicionname,settechicionname] = useState('');
    const [remark,setremark] = useState(''); 
  
    const [check_me_out,setCheck_me_out] = useState('')
    
     const submitForm = () =>
     {
      axios.post('',{
        sr_no:sr_no,
        mc_id:mc_id,
        shift:shift,
        bdtime:bdtime,
        bdhrs:bdhrs,
        natureofbreakedown:natureofbreakedown,
        actiontaken:actiontaken,
        spearused:spearused,
        sprearcost:sprearcost,
        techicionname:techicionname,
        remark:remark,
       
        check_me_out:check_me_out
      }).then((response)=>{
        alert('Data Inserted')
        navigate('/BreakdownAnalysis')
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
    <label for="exampleInputPassword1" class="form-label">date</label>
    <input type="text" class="form-control"  name='date' id="exampleInputPassword1" onChange={(e)=>{setdate(e.target.value)}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">shift</label>
    <input type="text" class="form-control" name='shift' id="exampleInputPassword1" onChange={(e)=>{setshift(e.target.value)}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">bdtime</label>
    <input type="text" class="form-control" name='bdtime' id="exampleInputPassword1" onChange={(e)=>{setbdtime(e.target.value)}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">bdhrs</label>
    <input type="text" class="form-control" name='bdhrs' id="exampleInputPassword1" onChange={(e)=>{setbdhrs(e.target.value)}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">natureofbreakedown</label>
    <input type="text" class="form-control" name='natureofbreakedown' id="exampleInputPassword1" onChange={(e)=>{setnatureofbreakedown(e.target.value)}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">actiontaken</label>
    <input type="text" class="form-control" name='actiontaken' id="exampleInputPassword1" onChange={(e)=>{setactiontaken(e.target.value)}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">spearused</label>
    <input type="text" class="form-control" name='spearused' id="exampleInputPassword1" onChange={(e)=>{setspearused(e.target.value)}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">sprearcost</label>
    <input type="text" class="form-control" name='sprearcost' id="exampleInputPassword1" onChange={(e)=>{setsprearcost(e.target.value)}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">techicionname</label>
    <input type="text" class="form-control" name='techicionname' id="exampleInputPassword1" onChange={(e)=>{settechicionname(e.target.value)}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">remark</label>
    <input type="text" class="form-control" name='remark' id="exampleInputPassword1" onChange={(e)=>{setremark(e.target.value)}}/>
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
