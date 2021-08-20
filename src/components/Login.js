import React, { useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    if (credentials.username === "" || credentials.password === "") {
      return setError("Username or Password not valid.");
    } else {
      axiosWithAuth()
        .post("http://localhost:5000/api/login", credentials)
        .then((res) => {
          console.log(res.data.payload);
          localStorage.setItem("token", res.data.payload);
          props.history.push("/bubble-page");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button id="submit">Log in</button>
        </form>
      </div>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;
