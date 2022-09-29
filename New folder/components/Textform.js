import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopy=()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
            setText(newText.join(" "))    
    
    }
    const clearText=()=>{
        let newText='';
        setText(newText);
    }

    let handleOnchange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // text= "newtext" ; -- wrong way to update text variable
    //  setText= ("Enter settext Here"); // -- correct way to update text variable
    return (
        <>
        <div className='container mx-2'>
            <h1>{props.heading}  </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange}  id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}  >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}  >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}  >copyText</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}  >Remove ExtraSpaces</button>
            <button className="btn btn-primary mx-1" onClick={clearText}  >clear</button>
        </div>
        <div className='container'>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split('').length}Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
