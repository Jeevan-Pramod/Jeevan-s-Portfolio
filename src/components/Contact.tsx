import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <footer className="contact-section section-container" id="contact">
      <div className="contact-hero">
        <span className="section-number">05 / CONTACT</span>
        <h2>LET'S BUILD<br /><em>SOMETHING PLAYABLE.</em></h2>
        <p>Open to game development opportunities, collaborations and interesting projects.</p>
        <a href="https://github.com/Jeevan-Pramod" target="_blank" rel="noreferrer" className="contact-cta">
          VIEW GITHUB <MdArrowOutward />
        </a>
      </div>

      <div className="contact-footer">
        <span>JEEVAN PRAMOD</span>
        <span>GAME DEVELOPER · KOCHI, INDIA</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
};

export default Contact;
