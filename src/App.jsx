import React, { useState, useEffect } from "react";
import { Background } from "./Components/Background/Background.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Hero } from "./Components/Hero/Hero.jsx";
// import { Explore } from "./Components/Explore/Explore.jsx";
// import { About } from "./Components/About/About.jsx";
// import { Contact } from "./Components/Contact/Contact.jsx"

export const App = () => {
	let heroData = [
		{ text1: "Dive into", text2: "what you love" },
		{ text1: "Indulge", text2: "your passions" },
		{ text1: "Give in to ", text2: "your desires" },
	];

	const [heroCount, setHeroCount] = useState(0);
	const [playStatus, setPlayStatus] = useState(false);

	useEffect (() => {
		setInterval(() => {
			setHeroCount((count) => {return count === 2 ? 0 : count + 1 });  
			
		}, 3000);
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
			{/* <Explore />
			<About />
			<Contact /> */}
		</div>
	);
};
