import "./styles/About.css";

const About = () => (
  <section className="about-section" id="about">
    <div className="about-grid">
      <div className="about-label">
        <span className="section-number">02 / ABOUT</span>
        <span>PLAYER FIRST</span>
      </div>
      <div className="about-main">
        <h2>I DON'T JUST<br /><span>WRITE CODE.</span></h2>
        <p className="about-lede">I build the systems behind the experience — gameplay mechanics, UI, progression, feedback and the little interactions that make a game feel good to play.</p>
        <p className="about-copy">My work centres on Unity and C#, collaborating with designers and artists to turn ideas into playable, polished experiences for mobile and PC.</p>
      </div>
      <div className="about-side">
        <span>FOCUS</span><strong>GAMEPLAY<br />SYSTEMS</strong>
        <span>BASED IN</span><strong>KOCHI, INDIA</strong>
      </div>
    </div>
  </section>
);

export default About;
