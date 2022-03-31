import React from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";

import PatientList from './components/PatientList/PatientList';
import SideBar from './components/SideBar/SideBar';

import {AppDivisionWrapper} from "./AppStyle"
import OverView from './components/OverView';


const App = () => {
  return (
    <>
      <AppDivisionWrapper >
          <SideBar />
        <Routes>
          <Route path="patient" element={<OverView />} />  
          <Route path="/patient/:patient" element={<PatientList />} />  
        </Routes>
      </AppDivisionWrapper>
    </>
  );
}

export default App;
