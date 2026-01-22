import React, { useEffect, useState } from "react";
import "./Nav.css";

const ITEMS = [
  { id: "accueil", label: "Accueil" },
  { id: "apropos", label: "À propos" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is closest to top (offset)
      let closest = active;
      let minDist = Number.POSITIVE_INFINITY;
      for (const item of ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top);
        if (dist < minDist) {
          minDist = dist;
          closest = item.id;
        }
      }
      setActive(closest);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className="site-nav" role="banner">
      <nav className="nav-inner" role="navigation" aria-label="Main navigation">
        <div className="nav-left">
          <button
            className="logo"
            onClick={() => goTo("accueil")}
            aria-label="Aller à l'accueil"
          >
            PORTOFOLIO
          </button>
        </div>

        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {ITEMS.map((it) => (
            <li key={it.id}>
              <button
                className={`nav-link ${active === it.id ? "active" : ""}`}
                onClick={() => goTo(it.id)}
                aria-current={active === it.id ? "page" : undefined}
              >
                {it.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}