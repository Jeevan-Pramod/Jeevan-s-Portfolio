import "./styles/Career.css";

const Career = () => {
  return (
    <section className="career-section section-container" id="experience">
      <div className="career-top">
        <span className="section-number">04 / EXPERIENCE</span>
        <h2>THE PATH<br /><em>SO FAR.</em></h2>
      </div>

      <div className="career-list">
        <article className="career-item career-current">
          <div className="career-date">2025 — PRESENT</div>
          <div className="career-role">
            <h3>ASSOCIATE GAME DEVELOPER</h3>
            <p>Emergio Gaming</p>
          </div>
          <div className="career-description">
            Gameplay mechanics for mobile and casual games, release updates,
            debugging, playtesting, UI implementation and collaboration with
            artists and designers.
          </div>
        </article>

        <article className="career-item">
          <div className="career-date">2023 — 2025</div>
          <div className="career-role">
            <h3>FREELANCE GAME DEVELOPER</h3>
            <p>Self-employed</p>
          </div>
          <div className="career-description">
            Prototyping and developing interactive game experiences across
            gameplay, UI and systems using Unity and C#.
          </div>
        </article>

        <article className="career-item">
          <div className="career-date">2024</div>
          <div className="career-role">
            <h3>B.TECH — COMPUTER SCIENCE</h3>
            <p>EKC Technical Campus · APJ Abdul Kalam Technological University</p>
          </div>
          <div className="career-description">
            Computer Science graduate with a focus on programming and
            interactive technology.
          </div>
        </article>
      </div>
    </section>
  );
};

export default Career;
