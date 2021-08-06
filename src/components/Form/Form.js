import React from "react";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import "./form.css";

const Form = () => {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Form;
