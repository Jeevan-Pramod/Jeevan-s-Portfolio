import { useState } from "react";
import "./styles/WhatIDo.css";

const skills = [
  { title: "GAMEPLAY", text: "Player movement, combat, timers, progression, interactions and reusable gameplay systems.", tags: ["Unity", "C#", "Cinemachine"] },
  { title: "GAME UI", text: "HUDs, menus, shops, settings, feedback and mobile controls built around clear player flows.", tags: ["Unity UI", "TextMeshPro", "Figma"] },
  { title: "3D / TOOLS", text: "Supporting game production with modelling, asset preparation and visual iteration.", tags: ["Blender", "Maya", "Photoshop", "Aseprite"] },
  { title: "ENGINE / WORKFLOW", text: "Comfortable with Unity workflows, Git-based collaboration and Unreal Engine fundamentals.", tags: ["Unity", "Unreal", "Git", "Android"] },
];

const WhatIDo = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="whatIDO" id="skills">
      <div className="skills-heading">
        <span className="section-number">03 / SKILLSET</span>
        <h2>BUILT<br /><em>TO PLAY.</em></h2>
      </div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <button className={`skill-row ${active === index ? "skill-active" : ""}`} key={skill.title} onClick={() => setActive(index)}>
            <span className="skill-index">0{index + 1}</span>
            <span className="skill-title">{skill.title}</span>
            <span className="skill-content"><span>{skill.text}</span><span className="skill-tags">{skill.tags.map(tag => <i key={tag}>{tag}</i>)}</span></span>
            <span className="skill-plus">{active === index ? "−" : "+"}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
