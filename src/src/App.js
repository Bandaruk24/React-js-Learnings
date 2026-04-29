import './App.css';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';

function App(){
  return(
    <> 
      <Navbar heading = "TextUtilities" about = "About TextUtilities"/>
      <TextUtils heading = "Enter your text here"/>
    </>
  )
}
      

export default App;
