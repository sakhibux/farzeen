
import React from "react";
import logo from "./logo.svg"

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>MY PORTFOLIO</h1>
        <p>Hello! I'm [Sakhi Baksh], a Web Developer.</p>
      </header>

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>I am learning Next js and building cool projects in Quarter 2 Governer it course.</p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1: Todo List App</li>
            <li>Project 2: Responsive Website</li>
            <li>Project 3: Simple Portfolio</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact Me</h2>
          <h3>Email: sakhibux09@gmail.com</h3>
          <h4>Phone No: 03232679225</h4>
        </section>
      </main>

      <footer>
        <p>© 2024 My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

