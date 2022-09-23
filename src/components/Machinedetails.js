import React from 'react'

export default function () {
  return (
    <div>
      <h1><center>Machine Details</center></h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">MachineID</th>
      <th scope="col">Name Of Machine</th>
      <th scope="col">Manufacturing Date </th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>
        <input type="text" name='MachineID'/><br/>
      </td>
      <td><input type="text" name='Name Of Machine'/><br/></td>
      <td><input type="text" name='Manufacturing Date'/><br/></td>
      <button type="button" class="btn btn-outline-primary">Delete</button>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>
        <input type="text" name='MachineID'/><br/>
      </td>
      <td><input type="text" name='Name Of Machine'/><br/></td>
      <td><input type="text" name='Manufacturing Date'/><br/></td>
      <button type="button" class="btn btn-outline-primary">Delete</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      
      <td>
        <input type="text" name='MachineID'/><br/>
      </td>
      <td><input type="text" name='Name Of Machine'/><br/></td>
      <td><input type="text" name='Manufacturing Date'/><br/></td>
      <button type="button" class="btn btn-outline-primary">Delete</button>
    </tr>
  </tbody>
</table>

    </div>
  )
}
