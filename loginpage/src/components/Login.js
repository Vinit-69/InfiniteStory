import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
  /* Styled as per your requirements */
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem(email);

    if (storedPassword === password) {
      alert("Login successful!");
      navigate("/home"); // Redirect to home page
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email ID</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">LOGIN</button>
        <button type="button" onClick={() => navigate("/home")}>BACK TO HOME</button>
        <a onClick={() => navigate("/reset-password")} style={{ cursor: "pointer" }}>
          Forgot password?
        </a>
      </form>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
    </FormContainer>
  );
};

export default Login;
