import { PropsWithChildren, useEffect, useState } from "react";
import { MdArrowDownward } from "react-icons/md";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={`landing-section ${scrolled ? "landing-scrolled" : ""}`} id="landing">
      <div className="landing-noise" />
      <div className="landing-grid" />
      <div className="landing-orb landing-orb-a" />
      <div className="landing-orb landing-orb-b" />

      <div className="landing-container">
        <div className="landing-kicker">GAME DEVELOPER · UNITY · C#</div>

        <div className="landing-copy">
          <p className="landing-eyebrow">HELLO, I'M</p>
          <h1 className="landing-name" aria-label="Jeevan Pramod">
            <span>JEEVAN</span>
            <span>PRAMOD</span>
          </h1>
          <p className="landing-description">
            I build interactive experiences, gameplay systems and mobile games
            with a focus on feel, clarity and polish.
          </p>

          <div className="landing-actions">
            <a className="hero-button hero-button-primary" href="#work">
              EXPLORE GAMES <span>↘</span>
            </a>
            <a className="hero-button hero-button-ghost" href="#contact">
              CONTACT
            </a>
          </div>
        </div>

        <div className="landing-meta">
          <div>
            <span className="meta-label">CURRENTLY</span>
            <span className="meta-value">ASSOCIATE GAME DEVELOPER</span>
          </div>
          <div>
            <span className="meta-label">SPECIALTY</span>
            <span className="meta-value">GAMEPLAY SYSTEMS</span>
          </div>
        </div>

        <div className="landing-scroll">
          <span>SCROLL TO ENTER</span>
          <MdArrowDownward />
        </div>
      </div>

      <div className="hero-character-layer" aria-hidden="true">
        {children}
      </div>
    </section>
  );
};

export default Landing;
