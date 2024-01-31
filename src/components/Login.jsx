import { useRef, useState } from "react";

export default function Login() {
  const [emailIsvalid, setEmailIsValid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enterEmail = email.current.value;
    const enterPass = password.current.value;

    console.log(enterEmail, enterPass);

    const emailValid = enterEmail.includes("@");

    if (!emailValid) {
      setEmailIsValid(true);
      return;
    }
    setEmailIsValid(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div>{emailIsvalid && <p>please enter valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
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
