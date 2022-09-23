import React from 'react'

export default function PreventiveMaintainence() {
  return (
    <div>
      
      <h1><center>PreventiveMaintainence</center></h1>
      
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Srno</th>
      <th scope="col">MCID</th>
      <th scope="col">MCR_Rate_Per_Hour</th>
      <th scope="col">Avaliable_Time_Hour</th>
      
      <th scope="col">Lunch_Time_Hour</th>
      <th scope="col">MC_UP_Time</th>
      <th scope="col">Breakdown_Time_In_Hour</th>
      <th scope="col">No_Of_BreakDown</th>
      <th scope="col">MTTR</th>
      <th scope="col">MTBF</th>


    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
        <td>
          <input type="text" name='MCID'/><br/>
        </td>
        <td>
          <input type="text" name='MCR_Rate_Per_Hour'/><br/>
        </td>
        <td>
          <input type="text" name='Avaliable_Time_Hour'/><br/>
        </td>
        <td>
          <input type="text" name='Lunch_Time_Hour'/><br/>
        </td>
        <td>
          <input type="text" name='MC_UP_Time'/><br/>
        </td>
        <td>
          <input type="text" name='Breakdown_Time_In_Hour'/><br/>
        </td>
        <td>
          <input type="text" name='No_Of_BreakDown'/><br/>
        </td>
        <td>
          <input type="text" name='MTTR'/><br/>
        </td>
        <td>
          <input type="text" name='MTBF'/><br/>
        </td>
        
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>
          <input type="text" name='MCID'/><br/>
        </td>
        <td>
          <input type="text" name='MCR_Rate_Per_Hour'/><br/>
        </td>
        <td>
          <input type="text" name='Avaliable_Time_Hour'/><br/>
        </td>
        <td>
          <input type="text" name='Lunch_Time_Hour'/><br/>
        </td>
        <td>
          <input type="text" name='MC_UP_Time'/><br/>
        </td>
        <td>
          <input type="text" name='Breakdown_Time_In_Hour'/><br/>
        </td>
        <td>
          <input type="text" name='No_Of_BreakDown'/><br/>
        </td>
        <td>
          <input type="text" name='MTTR'/><br/>
        </td>
        <td>
          <input type="text" name='MTBF'/><br/>
        </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2"></td>
      <td></td>
    </tr>
  </tbody>
</table>
<button type="button" class="btn btn-primary">Add</button>
<h1></h1>
<button type="button" class="btn btn-primary">Submit</button>
    </div>

  )
}

