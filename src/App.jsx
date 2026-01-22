import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app">
      <Nav />

      <section id="accueil">
        <Hero />
      </section>

      <main className="main-grid">
        <section id="apropos">
          <About />
        </section>

        <section id="projets">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}