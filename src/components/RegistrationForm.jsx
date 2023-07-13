import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // Логика для отправки данных на сервак >>>
  };

  return (
    <div className="registration-form-container">
      <h2 className="registration-form-title">Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <div className="registration-form-field">
          <label htmlFor="username" className="registration-form-label">
            Логин
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="registration-form-input"
            required
          />
        </div>
        <div className="registration-form-field">
          <label htmlFor="email" className="registration-form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="registration-form-input"
            required
          />
        </div>
        <div className="registration-form-field">
          <label htmlFor="password" className="registration-form-label">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="registration-form-input"
            required
          />
        </div>
        <div className="registration-form-field">
          <label htmlFor="confirmPassword" className="registration-form-label">
            Повторите пароль
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="registration-form-input"
            required
          />
        </div>
        <button type="submit" className="registration-form-button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
