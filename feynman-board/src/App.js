import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import DashBoard from './components/DashBoard';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path ='/' index element = {<Login/>}/>
        <Route path ='/register' element = {<Register/>}/>
        <Route path = '/dashBoard' element = {<DashBoard/>}/>
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
