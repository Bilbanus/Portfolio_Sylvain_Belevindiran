import React from "react";
import "./Contact.css";

export default function Contact(){
  return (
    <aside className="contact">
      <div className="pill">Contact</div>

      <div className="contact-list">
        <p>✉️ Syl18vain@gmail.com</p>
        <p>🔗 LinkedIn</p>
      </div>

      <div className="pill">Autres</div>
      <div className="contact-extra">
        <p>Informations supplémentaires / icônes</p>
      </div>
    </aside>
  );
}