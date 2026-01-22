import React from "react";
import "./About.css";
// Si tu n'as pas d'image, crée src/assets/avatar-placeholder.png ou commente la ligne ci-dessous
import avatar from "../assets/avatar.png";

export default function About() {
  return (
    <aside className="about">
      <div className="avatar-wrap center">
        {/* Si import avatar échoue, remplace <img> par un placeholder */}
        {avatar ? (
          <img src={avatar} alt="avatar" className="avatar" />
        ) : (
          <div className="avatar-placeholder" aria-hidden="true" />
        )}

        <h2 className="name">
          BELEVINDIRAN
          <br />
          <span className="firstname">Sylvain</span>
        </h2>

        <p className="role">Etudiant<br />BUT MMI 2nd</p>
      </div>

      <div className="pill-wrap">
        <div className="pill-title pill">Qui je suis?</div>
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

      <div className="small-pill">Interets</div>
    </aside>
  );
}