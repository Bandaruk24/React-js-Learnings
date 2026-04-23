import React,{useState} from 'react'
// React Hooks are functions that let you use state and other React features without writing a class.

export default function TextUtils(props) {
  const [text, setText] = useState("Enter your text here");

  const changeToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText); 
  }

  const changeToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='mb-3 my-3'>
        <div className='container'>
            <h1 className='mb-3'>{props.heading}</h1>
            <textarea id="myTextarea" className='form-control' rows = "8" value={text} onChange={onChangeText}></textarea>
            <button className="btn btn-primary my-4" onClick={changeToUpperCase}>Convert to Uppercase</button>
            <button className="btn btn-primary my-4 mx-2" onClick={changeToLowerCase}>Convert to Lowercase</button>
        </div>
    </div>
  )
}
