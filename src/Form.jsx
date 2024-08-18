import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeForm, setActiveForm] = useState("login");

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const toggleFormType = (formType) => {
    setActiveForm(formType);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "5px 0",
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    fontSize: "16px",
    transition: "border-color 0.3s",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    margin: "20px 0 10px",
    backgroundColor: "#4f46e5", // Indigo
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <>
      <a
        href="javascript:void(0);"
        id="auth-button"
        onClick={toggleFormVisibility}
      >
        Login / Sign Up
      </a>

      {showForm && (
        <div className="form-overlay">
          <button className="cancel-button" onClick={toggleFormVisibility}>
            &times; {/* HTML entity for a cross symbol */}
          </button>
          <div className="form-container">
            <div className="toggle-buttons">
              <button
                className={activeForm === "login" ? "active" : ""}
                onClick={() => toggleFormType("login")}
              >
                Login
              </button>
              <button
                className={activeForm === "signup" ? "active" : ""}
                onClick={() => toggleFormType("signup")}
              >
                Sign Up
              </button>
            </div>
            {activeForm === "login" ? (
              <form className="form">
                <input
                  style={inputStyle}
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  style={inputStyle}
                  type="password"
                  placeholder="Password"
                  required
                />
                <button style={buttonStyle} type="submit">
                  Login
                </button>
              </form>
            ) : (
              <form className="form">
                <input
                  style={inputStyle}
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  style={inputStyle}
                  type="number"
                  placeholder="Phone Number"
                  required
                />
                <input
                  style={inputStyle}
                  type="password"
                  placeholder="Password"
                  required
                />
                <input
                  style={inputStyle}
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
                <button style={buttonStyle} type="submit">
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
