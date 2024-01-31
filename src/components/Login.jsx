import { useState } from "react";

export default function Login() {
  // const [enterEmail, setEnterEmail] = useState("");
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("value:::", inputValue);
  }

  function handleInputChange(identifier, value) {
    setInputValue((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));
  }

  // function handleEmailChange(event) {
  //   setEnterEmail(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={inputValue.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={inputValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
