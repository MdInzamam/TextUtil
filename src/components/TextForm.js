import React, {useState} from 'react'


export default function TextForm(props) {
  const [text,SetText] = useState("");

  const handelUperCase = () =>{
    let toUpper = text.toUpperCase()
    SetText(toUpper)
  }
  const handeLowerCase = () =>{
    let tolower = text.toLowerCase();
    SetText(tolower)
  }
  const clearText = () =>{
    let tolower = "";
    SetText(tolower)
  }
  const copyText = () => {
    navigator.clipboard.writeText(text);
  };
  
  const firstisUppercase = () => {
    let words = text.split(" ");
    let capitalizedSentence = [];
    
    for (let i = 0; i < words.length; i++) {
      if (i > 0) {
        capitalizedSentence += " "; // Add space before each word except the first
      }
      capitalizedSentence += words[i][0].toUpperCase() + words[i].substr(1);
    }   
    SetText(capitalizedSentence);
  };

  const removeExtraSpaces = () => {
    let removeSpace = text.replace(/\s+/g," ").trim();
    SetText(removeSpace);
  };

  const handelOnChange = (event) =>{
    SetText(event.target.value)
  }
  return (
  <>
  <div className="container-fluid "></div>
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} placeholder='Write hear' onChange={handelOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <div className=' my-3 d-flex justify-content-between'>
      <div><button type="button" className="btn btn-outline-dark" onClick={handelUperCase}>Convert to Uppercase</button></div>
      <div><button type="button" className="btn btn-outline-dark" onClick={handeLowerCase}>Convert to Lowercase</button></div>
      <div><button type="button" className="btn btn-outline-dark" onClick={firstisUppercase}>Convert first character</button></div>
      <div><button type="button" className="btn btn-outline-dark" onClick={removeExtraSpaces}>Remove Extra Space</button></div>
      <div><button type="button" className="btn btn-outline-dark" onClick={clearText}>Clear Text</button></div>
      <div><button type="button" className="btn btn-outline-dark" onClick={copyText}>Copy Text</button></div>
      </div>
    <div className="container my-3">
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} words number of {text.length} Characters</p>
      <p>{0.008 * text.split('').length} Minutes read</p>
      <h3>Previw hear</h3>
      <div className= "bg-white fs-4 fw-normal">
      <p>{text}</p>
      </div>
    </div>
  </>
  );
}