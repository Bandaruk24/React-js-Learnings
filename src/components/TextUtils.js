import React,{useState} from 'react'
// React Hooks are functions that let you use state and other React features without writing a class.

export default function TextUtils(props) {
  const [text, setText] = useState("");

  const changeToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText); 
    props.showAlert("Converted to UpperCase","success");
  }

  const changeToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }

  const convertToCamelCase = () => {
    let newText = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
    setText(newText);
    props.showAlert("Converted to Camel Case","success");
  } 

  const clearText = () => {
    setText("");
    props.showAlert("Cleared Text","danger");
  } 

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const CopyTextHandler = () => {
    let text = document.getElementById('myTextarea');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied Text to ClipBoard","success");
  }

  const HandleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are Removed","success");
  } 
  return (
    <>
        <div className='container' style={{color:props.mode === 'dark'?'white' : '#044a84'}}>
            <h1 className='mb-3'>{props.heading}</h1>
            <textarea id="myTextarea" className='form-control' style={{backgroundColor:props.mode === 'dark'?'#044a84' : 'white',
              color:props.mode === 'dark'?'white' : '#044a84'}} rows = "8" value={text} onChange={onChangeText}></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-4" onClick={changeToUpperCase}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-4 mx-2" onClick={changeToLowerCase}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-4 mx-2" onClick={clearText}>Clear Text</button>
            <button disabled={text.length===0} className='btn btn-primary my-4 mx-2' onClick={convertToCamelCase}>Convert to Camel Case</button>
            <button disabled={text.length===0} className='btn btn-primary my-4 mx-2' onClick={CopyTextHandler}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary my-4 mx-2' onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color:props.mode === 'dark'?'white' : '#044a84'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>element.length!==0).length} Words and {text.length} Characters</p>
            <h2>{0.008 * text.split(" ").filter((element)=>element.length!==0).length} Minutes to Read</h2>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>
    </>
  )
}
