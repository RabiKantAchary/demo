// import logo from './logo.svg';
import './App.css';
import Formui from './components/Formui';
import Navbar from './components/NavBar';
import React, { useState } from 'react'
function App() {
  const changemode=()=>{
    if(mode==='light'){
      setmode('dark')
      changename('light')
      document.body.style.backgroundColor='#48494d'
    }
    else{
      setmode('light')
      changename('dark')
      document.body.style.backgroundColor='white'
    }
  }
  const [mode, setmode]=useState('light')
  const [modename, changename]=useState('dark')
  return (
   <>
    <Navbar mode={mode} modename={modename} changemode={changemode}/>
    <Formui mode={mode} changemode={changemode}/>
   
   </>
  );
}

export default App;
