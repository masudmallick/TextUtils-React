import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpperClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Changed clicked");
    setText(event.target.value);
  };

  const handelCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className='container col-6 mt-5' style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div>
          {/* <h1>{props.heading}</h1> */}
          <textarea className='form-control' id='myBox' style={{ backgroundColor: props.mode === "dark" ? "gray" : "white" }} rows='8' value={text} onChange={handleOnChange}></textarea>
          <button className='btn btn-primary mt-3 mx-2' onClick={handelUpperClick}>
            Convert To Uppercase
          </button>
          <button className='btn btn-primary mt-3 mx-2' onClick={handelLowerClick}>
            Convert To Lowercase
          </button>
          <button className='btn btn-primary mt-3 mx-2' onClick={handelClearClick}>
            Clear Text
          </button>
          <button className='btn btn-primary mt-3 mx-2' onClick={handelCopy}>
            Copy Text
          </button>
          <button className='btn btn-primary mt-3 mx-2' onClick={handelExtraSpaces}>
            Remove Extra Space
          </button>
        </div>
        <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <h5>Your text summary</h5>
          <p>
            {text.split(" ").length} words and {text.length} characters{" "}
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
      </div>
    </>
  );
}
