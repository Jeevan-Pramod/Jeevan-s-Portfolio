import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";

const SocialIcons = () => (
  <div className="icons-section">
    <div className="social-icons" id="social">
      <a href="https://github.com/Jeevan-Pramod" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/jeevan-pramod-aa641b23a/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
    </div>
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noreferrer">RESUME <span>↗</span></a>
  </div>
);

export default SocialIcons;
