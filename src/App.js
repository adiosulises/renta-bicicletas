import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/forgot' element={<Forgot />} />
          <Route exact path='/main' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;