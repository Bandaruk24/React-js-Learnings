import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
//import About  from './components/About';
import React, { useState } from 'react';


function App(){
  const [mode,setMode] = useState('light');
  const [alert,setAlert ] =useState(null);

  const showAlert = (message,type) => {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled","success");
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#044a84';
      showAlert("Dark Mode is Enabled","success");
    }
  }
  return(
    <> 
      <Navbar heading = "TextUtilities" about = "About TextUtilities" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <TextUtils heading = "Enter your text here" mode={mode} showAlert={showAlert}/>
      {/*<About/>*/}
    </>
  )
}
      

export default App;
