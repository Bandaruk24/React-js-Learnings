import React from 'react'

export default function About(props) {
    // {const [myStyle,setMyStyle] = useState({
    //     color:'#044a84',
    //     backgroundColor:'white'
    // })}

    //const [btnText,setBtnText] = useState("Enable Dark Mode");
    const myStyle = {
    color:props.mode === 'dark'?'white' : '#044a84',
    backgroundColor:props.mode === 'dark'?'#044a84' :  'white',
    }

  return (
    <div className='container my-5' style={myStyle}>
        <h1 style={{color:props.mode === 'dark'?'white' : '#044a84'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is TextUtility?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtility is a simple and efficient tool designed to help you manipulate and analyze text quickly. Whether you want to convert text to uppercase or lowercase, remove extra spaces, or copy formatted content, this app provides a fast and user-friendly way to handle everyday text operations without any hassle.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Why Use TextUtility?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtility saves time by automating common text tasks that would otherwise be repetitive and manual. It is built with a clean interface, making it easy for anyone  from students to professionals - to quickly edit and transform text. No installation or complex setup is required - just type or paste your text and start using the features instantly.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Features of TextUtility
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtility offers a range of helpful features including text case conversion (uppercase/lowercase), removing extra spaces, copying text with a single click, and real-time text preview. The app is lightweight, fast, and responsive, ensuring a smooth experience across devices.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
