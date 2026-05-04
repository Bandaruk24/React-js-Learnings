import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
import About  from './components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


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
      document.title = 'TextUtils - Light Mode';
      /* setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500); */
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#044a84';
      showAlert("Dark Mode is Enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
  }
  return(
    <> 
    <Router>
      <Navbar heading = "TextUtilities" about = "About TextUtilities" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
        <Routes>
          {/* Exact match is used to match specific paths 
          /users --> component 1
           /users/home --> component 2 */ }
          <Route exact path="/" element={<TextUtils showAlert={showAlert} heading="TextUtils" mode={mode}/>} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </Router>
    </>
  )
}
      

export default App;
