import React from "react";
import "./Skills.css";
import skillsSprite from "../assets/skills.png"; // sprite contenant plusieurs icônes

export default function Skills() {
  return (
    <section className="skills">
      <div className="title pill">Logicel</div>

      <div className="icons-row">
        <div className="icon sprite icon-1" aria-hidden="true" />
        <div className="icon sprite icon-2" aria-hidden="true" />
        <div className="icon sprite icon-3" aria-hidden="true" />
        <div className="icon sprite icon-4" aria-hidden="true" />
      </div>

      <div className="title pill">Develloper</div>

      <div className="skills-list">
        <p>HTML • CSS • JS • React</p>
      </div>
    </section>
  );
}