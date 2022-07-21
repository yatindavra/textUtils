import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("HandleUpclick")
    let newText = text.toUpperCase();
    setText(newText)
  }
  const clear = ()=>{
    setText("")
  }
  const ChangeCol=()=>{
    let newCol = document.getElementById("exampleFormControlTextarea1");
    
    newCol.style.color = "#" + ((1<<24)*Math.random() | 0).toString(16);

    
     
  }
  const handleOnChange = (event) =>{

    // console.log("handleOnChange")
    setText(event.target.value)
  }
    const [text, setText] = useState("Enter Text Here");
   

    // setText("Hi Ytain Enetr Text Here")
  return (
    <div>
        <div className="container mb-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button className="btn btn-primary mt-3" onClick={handleUpClick} >
            Convert To UpperCase
        </button>
        <button className="btn btn-primary mt-3 mx-3" onClick={clear} >
            Clear Text
        </button>
        <button className="btn btn-primary mt-3 mx-3" onClick={ChangeCol} >
            Change Color
        </button>
        </div>
        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").length} words {text.length} charecters</p>
        </div>
    </div>
  )
}
