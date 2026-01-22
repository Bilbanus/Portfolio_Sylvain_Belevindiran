import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" role="region" aria-label="Bannière">
      {/* Titre conservé pour l'accessibilité mais pas visible */}
      <h1 className="sr-only">PORTOFOLIO</h1>

      <div className="hero-bar" aria-hidden="true"></div>

      <p className="hero-subtitle">
        Bienvenu sur mon <span>PORTOFOLIO</span>
      </p>
    </section>
  );
}