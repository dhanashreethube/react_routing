
import './App.css';
import Attendance from './components/Attendance';
import Navbar from './components/Navbar';
import { Routes ,Route } from 'react-router-dom';
import Viewattendance from './components/Viewattendance';
import Addattendance from './components/Addattendance';
import Machinedetails from './components/Machinedetails';
import BreakdownAnalysis from './components/BreakdownAnalysis';
import PreventiveMaintainence from './components/PreventiveMaintainence';
import ElectricityConsumption from './components/ElectricityConsumption';
import Machinedetailsform from './components/Machinedetailsform';
import BreakdownAnalysisform from './components/BreakdownAnalysisform';
function App() {
  return (

    
       <>

<Routes>
  <Route path='/' element={<Navbar/>}/>
  <Route path='Attendance' element={<Attendance />}/>
  <Route path='Addattendance' element={< Addattendance/>}/>
  <Route path='Viewattendance' element={<Viewattendance />}/>
  <Route path='Machinedetails' element={<Machinedetails />}/>
  <Route path='Machinedetailsform' element={<Machinedetailsform />}/>
  <Route path='BreakdownAnalysisform' element={<BreakdownAnalysisform />}/>
  <Route path='BreakdownAnalysis' element={<BreakdownAnalysis />}/>
  <Route path='PreventiveMaintainence' element={< PreventiveMaintainence/>}/>
  <Route path='ElectricityConsumption' element={< ElectricityConsumption/>}/>
</Routes>
       
            
          
       </>
  );
}

export default App;
