import React from "react";
import "./App.css";
import Form from "./Form";
import Logo from "./images/logo.png";
import Hero from "./Hero";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <div className="logo">
            <div className="logo-icon" />
            <img src={Logo} width="50px" alt="Logo" />
            BookAI
          </div>
          <nav>
            <a href="/">Features</a>
            <a href="/">How It Works</a>
            <a href="/">Roadmap</a>
            <a href="/">API</a>
            <a href="/">Price</a>
            <a href="/">Models</a>
            <Form />
          </nav>
        </header>
        <Hero />
      </div>
    </>
  );
}

export default App;
