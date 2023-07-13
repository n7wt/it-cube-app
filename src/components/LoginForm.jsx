import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // логика для отправки данных на сервак >>
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-title">Вход</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form-field">
          <label htmlFor="email" className="login-form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="login-form-input"
            required
          />
        </div>
        <div className="login-form-field">
          <label htmlFor="password" className="login-form-label">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="login-form-input"
            required
          />
        </div>
        <button type="submit" className="login-form-button">
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
