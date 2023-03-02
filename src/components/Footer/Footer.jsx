import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <h3>BlogTottie</h3>
        My personal blog for progressiveness of my career.
        <br />
        Made with love and{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        . Mesho254 Blog © 2022.
      </Container>
    </footer>
  );
}
