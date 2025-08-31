import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("Uppercase is Clicked");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Change to Upper-Case" , "Success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myTextArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your Text is Copied", "Success");
  };
  
  // This is use to type any text into textarea
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  // Dark Mode
  const myStyle = props.myStyle;

  return (
    <>
      <div
        className="form-floating"
        style={{ ...myStyle, padding: "20px", borderRadius: "10px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>{props.heading} </h1>
        </div>
        <div>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="myTextArea"
            style={{
              ...myStyle,
              backgroundColor:
                myStyle.color === "#f8f9fa" ? "#2c2f33" : "white",
              color: myStyle.color === "#f8f9fa" ? "#f8f9fa" : "#212529",
              height: "300px",
              marginBottom: "10px",
              border: "2px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "1rem",
            }}
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              className="btn btn-primary"
              onClick={handleUpClick}
              style={{ marginRight: "10px" }}
            >
              Change to UpperCase
            </button>
            <button className="btn btn-primary" onClick={handleCopy}>
              Copy Text
            </button>
          </div>
        </div>
      </div>
      <div
        className="textSummary"
        style={{
          display: "block",
          marginTop: "20px",
          ...myStyle,
          backgroundColor: myStyle.color === "#f8f9fa" ? "#2c2f33" : "white",
          color: myStyle.color === "#f8f9fa" ? "#f8f9fa" : "#212529",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          Words :{" "}
          <b>
            {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}
          </b>
        </p>
        <p>
          Character : <b>{text.length}</b>
        </p>
        <p>
          <b>
            {0.008 *
              (text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)}
          </b>{" "}
          Minutes Read
        </p>
      </div>
    </>
  );
}

TextArea.propTypes = {
  heading: PropTypes.string.isRequired,
};
/*
    To use `myStyleDM` and `setMyStyleDM` in your Navbar file, you should not export them directly from inside the component.
    Instead, lift the dark mode state up to a parent component (e.g., App.js), and pass it as props to both TextArea and Navbar.
    Directly exporting state and setState from inside a component is not recommended in React.
*/
// export {myStyleDM, setMyStyleDM};
