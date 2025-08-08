import React, { useState, useEffect } from "react";
import { Background } from "./Components/Background/Background.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Hero } from "./Components/Hero/Hero.jsx";
// import { Explore } from "./Components/Explore/Explore.jsx";
// import { About } from "./Components/About/About.jsx";
// import { Contact } from "./Components/Contact/Contact.jsx"

export const App = () => {
  let heroData = [
    
    
    { text1: "Start ", text2: "Your Journey" },
    { text1: "Drive ", text2: "Your Dreams" },
    { text1: "Explore ", text2: "The World" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });  
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};
