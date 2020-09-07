import React from "react";

const e = "Please Enter your City :)";
const welcome = "Whats's the weather today?";
var errorMsg = "";

function Form(props) {
  return (
    <div>
      <div className="errMsg">
        <h2>{props.error ? (errorMsg = e) : (errorMsg = "")}</h2>
      </div>
      <form onSubmit={props.loadWeather}>
        <div className="row">
          <input
            type="text"
            className="city"
            name="city"
            autoComplete="off"
            placeholder="City"
          />
          <input
            type="text"
            className="country"
            name="country"
            autoComplete="off"
            placeholder="Country"
          />
          <button className="btn">What's the Weather?</button>
        </div>
      </form>
      <h5 className="footer">© Made by Saheel Kumar Das using React ❤ </h5>
    </div>
  );
}

export default Form;
