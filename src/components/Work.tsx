import { MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";

const games = [
  { index: "01", title: "POLY SNAKE 2.0", type: "MOBILE · ARCADE", engine: "UNITY 6", accent: "snake", description: "A polished arcade snake experience built around multiple game modes, time pressure, progression and a player-focused shop.", tags: ["C#", "GAMEPLAY", "UI", "ANDROID"] },
  { index: "02", title: "BRUSHING GAME", type: "MOBILE · EDUCATIONAL", engine: "UNITY 6", accent: "brush", description: "A guided brushing experience designed for children, with a 100-second routine, XP, streaks and offline progression.", tags: ["2D", "URP", "UX", "OFFLINE"] },
  { index: "03", title: "SHADOW WARS", type: "MOBILE · ACTION", engine: "UNITY", accent: "shadow", description: "Gameplay-focused action work centred on responsive player interactions, combat systems and moment-to-moment feel.", tags: ["C#", "COMBAT", "GAMEPLAY"] },
  { index: "04", title: "NIGHT RUSHER", type: "MOBILE · ARCADE", engine: "UNITY", accent: "night", description: "A fast-paced mobile game project with emphasis on replayability, progression and clean gameplay feedback.", tags: ["C#", "MOBILE", "SYSTEMS"] },
];

const Work = () => (
  <section className="work-section" id="work">
    <div className="work-container">
      <div className="section-intro work-intro">
        <span className="section-number">01 / SELECTED WORK</span>
        <h2>GAMES<br /><em>I'VE BUILT.</em></h2>
        <p>Selected projects that represent how I approach gameplay, systems and player experience.</p>
      </div>
      <div className="work-grid">
        {games.map((game) => (
          <article className={`game-card game-card-${game.accent}`} key={game.title}>
            <div className="game-art">
              <div className="game-art-grid" />
              <div className="game-art-shape" />
              <span className="game-index">{game.index}</span>
              <span className="game-engine">{game.engine}</span>
              <div className="game-art-title">{game.title}</div>
            </div>
            <div className="game-info">
              <div><p className="game-type">{game.type}</p><h3>{game.title}</h3></div>
              <span className="game-arrow"><MdArrowOutward /></span>
              <p className="game-description">{game.description}</p>
              <div className="game-tags">{game.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="work-footer"><span>MORE PROJECTS IN DEVELOPMENT</span><span>04 / 04</span></div>
    </div>
  </section>
);

export default Work;
