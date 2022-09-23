import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function () {
  const [Attendancelist,setAttendance] = useState([])

  useEffect(()=>{
    loadAttendList()
  },[])

  const loadAttendList = () =>{
    axios.get('http://localhost:7575').then((response)=>{
      setAttendance(response.data)
    });
  }

  return (
    <div>
      <h1><center>View Attendance</center></h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">shift</th>
            <th scope="col">empId</th>
            <th scope="col">empName</th>
            <th scope="col">remark </th>
            <th scope="col">date </th>
          </tr>
        </thead>
        <tbody>
          {Attendancelist.map((val)=>{
            return(
              <>
              <tr>
            <th scope="row">1</th>

            <td>

              <input type="text" name='id' value={val.id} /><br />
              

            </td>
            <td>

              <input type="text" name='shift' value={val.shift} /><br />

              

            </td>


            <td>
              <input type="text" name='empId' value={val.empId} /><br />
             

            </td>
            <td>

              <input type="text" name=' empName' value={val.empName} /><br />
              

            </td>
            <td>
              <input type="text" name='remark' value={val.remark} /><br />
              

            </td>

            <td>
              <input type="text" name='date' value={val.date} /><br />
            </td>
            

          </tr>
              </>
            )
          })}
          
        </tbody>
      </table>

      
    </div>
  )
}
