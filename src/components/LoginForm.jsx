import React from "react";
import { useState } from "react";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({
    name: "",
    password: "",
    email: ""
  });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <h2>Login</h2>

          {error !== "" ? <div> {error}</div> : ""}

          <div>
            <label htmlFor="name"> Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setDetails({ ...details, name: e.target.value });
              }}
            />
          </div>

          <div>
            <label htmlFor="email"> Email</label>

            <input
              type="text"
              id="email"
              onChange={(e) => {
                setDetails({ ...details, email: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="password"> password</label>

            <input
              type="text"
              id="password"
              onChange={(e) => {
                setDetails({ ...details, password: e.target.value });
              }}
            />
          </div>

          <input type="submit" name="" id="" value="Login" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
