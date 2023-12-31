import React, { useState } from "react";
import "./LoginForm.css";
import Modal from "./Modal";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== "salanamir0@gmail.com" && email !== "newt") {
      setModalContent({
        type: "error",
        message: "Вы ввели неверный логин или почту",
      });
      return;
    }

    if (password !== "12345") {
      setModalContent({
        type: "error",
        message: "Вы ввели неверный пароль",
      });
      return;
    }

    setModalContent({
      type: "success",
      message: "Успешная авторизация",
    });

    console.log("Email:", email);
    console.log("Password:", password);
    // логика для отправки данных на сервер
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-title">Вход</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form-field">
          <label htmlFor="email" className="login-form-label">
            Логин / Email
          </label>
          <input
            type="text"
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
      {modalContent && (
        <Modal
          type={modalContent.type}
          message={modalContent.message}
          onClose={() => setModalContent(null)}
        />
      )}
    </div>
  );
};

export default LoginForm;
