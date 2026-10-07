import { PropsWithChildren } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";

const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <Landing>{children}</Landing>
      <About />
      <Work />
      <WhatIDo />
      <Career />
      <Contact />
    </div>
  );
};

export default MainContainer;
