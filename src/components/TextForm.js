import React, { useState } from "react";

//When writing the lower case is getting converted to the uppere case using the toUpperCase function of javascript.
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log("UpperCase was Clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  //Console log is not necessary, we have used this for degugging.

  const handleOnChange = (event) => {
    // console.log("OnChanged");
    setText(event.target.value);
  };

  //State creation
  const [text, setText] = useState("Enter text here");
  // text="new text"; // wrong way to change the state
  // setText("new  Text"); // correct way to change the staete

  return (
    <>
      <div className="container">
      <h1>{props.heading} </h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="7"
        ></textarea>

      </div>
      {/* Event Handler   */}

      {/* Button for the upper case */}

      <button className="btn btn-primary mx-3.5" onClick={handleUpClick}>
        Convert to UpperCase
      </button>

      {/* Button for the Lower case */}

      <button className="btn btn-primary mx-5" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
    </div>
    <br />
    <div className="container">
      <h1>Your Text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>
  );
}
