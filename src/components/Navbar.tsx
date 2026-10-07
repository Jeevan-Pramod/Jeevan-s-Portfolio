import { useEffect, useState } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header ${solid ? "header-solid" : ""}`}>
      <a href="#landing" className="navbar-title" data-cursor="disable" onClick={close}>
        JP<span>.</span>
      </a>

      <button className={`navbar-menu-button ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span />
        <span />
      </button>

      <nav className={`navbar-nav ${open ? "nav-open" : ""}`}>
        <a href="#work" onClick={close}>GAMES</a>
        <a href="#about" onClick={close}>ABOUT</a>
        <a href="#experience" onClick={close}>EXPERIENCE</a>
        <a href="#contact" onClick={close}>CONTACT</a>
      </nav>

      <a href="/resume.pdf" target="_blank" rel="noreferrer" className="navbar-resume" data-cursor="disable">
        RESUME ↗
      </a>
    </header>
  );
};

export default Navbar;
