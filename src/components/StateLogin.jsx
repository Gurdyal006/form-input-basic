import { useState } from "react";
import Input from "./Input.jsx";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation.js";

export default function StateLogin() {
  // const [enterEmail, setEnterEmail] = useState("");
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  // const emailIsValid = didEdit.email && !inputValue.email.includes("@");
  // const passwordLength = didEdit.password && inputValue.password.trim() < 6;

  // from outsource validation
  const emailIsValid =
    didEdit.email &&
    !isEmail(inputValue.email) &&
    !isNotEmpty(inputValue.email);

  const passwordLength =
    didEdit.password && !hasMinLength(inputValue.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("value:::", inputValue);

    // setInputValue({
    //   email: "",
    //   password: "",
    // });
  }

  function handleInputChange(identifier, value) {
    setInputValue((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={inputValue.email}
          onBlur={() => handleInputBlur("email")}
          error={emailIsValid && "Please enter valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={inputValue.password}
          onBlur={() => handleInputBlur("password")}
          error={
            passwordLength && "Please enter password more than 6 char.... "
          }
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
