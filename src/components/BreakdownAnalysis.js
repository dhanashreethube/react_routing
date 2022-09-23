import React, { useState } from 'react'

export default function BreakdownAnalysis() {
  
  return (

    <div>
      <h1><center>BreakdownAnalysis</center></h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">MachineID</th>
      <th scope="col">Date</th>
      <th scope="col">Shift </th>
      <th scope="col">BDTime </th>
      <th scope="col">BDHrs</th>
      <th scope="col">NatureOfBreakdown</th>
      <th scope="col">ActionTaken</th>
      <th scope="col">SpearUsed</th>
      <th scope="col">SprearCost</th>
      <th scope="col">TechicionName</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>
        
          <input type="text" name='MachineID' /><br/>
        
        
      </td>
				
				
      <td>
      <input type="text" name='Date'/><br/>
      </td>
      <td>
        
      <input type="text" name='Shift '/><br/>

      </td>
      <td>
      <input type="text" name='BDTime'/><br/>
      </td>
      <td>
      <input type="text" name='BDHrs'/><br/>
      </td>
      <td>
      <input type="text" name='NatureOfBreakdown'/><br/>
      </td>
      <td>
      <input type="text" name='ActionTaken'/><br/>
      </td>
      <td>
      <input type="text" name='SpearUsed'/><br/>
      </td>
      <td><input type="text" name='SprearCost'/><br/></td>
      <td><input type="text" name='TechicionName'/><br/></td>
      <button type="button" class="btn btn-outline-primary">Delete</button>
    </tr>
    <tr>
      <th scope="row">2</th>
      
    </tr>
    <tr>
      <th scope="row"></th>
      
      <td>
        
          <input type="text" name='MachineID'/><br/>
        
        
      </td>
				
				
      <td>
      <input type="text" name='Date'/><br/>
      </td>
      <td>
        
      <input type="text" name='Shift '/><br/>

      </td>
      <td>
      <input type="text" name='BDTime'/><br/>
      </td>
      <td>
      <input type="text" name='BDHrs'/><br/>
      </td>
      <td>
      <input type="text" name='NatureOfBreakdown'/><br/>
      </td>
      <td>
      <input type="text" name='ActionTaken'/><br/>
      </td>
      <td>
      <input type="text" name='SpearUsed'/><br/>
      </td>
      <td><input type="text" name='SprearCost'/><br/></td>
      <td><input type="text" name='TechicionName'/><br/></td>
      <button type="button" class="btn btn-outline-primary">Delete</button>
    </tr>
  </tbody>
</table>

    </div>
  )
}
