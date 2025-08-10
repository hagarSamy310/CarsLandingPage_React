import React, { useState, useEffect } from "react";
import "./Hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

export const Hero = ({
	heroData,
	heroCount,
	setHeroCount,
	setPlayStatus,
	playStatus,
}) => {
	const [displayText1, setDisplayText1] = useState("");
	const [displayText2, setDisplayText2] = useState("");
	const [currentLine, setCurrentLine] = useState(1);
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		setDisplayText1("");
		setDisplayText2("");
		setCurrentLine(1);
		setShowCursor(true);

		const text1 = heroData.text1;
		const text2 = heroData.text2;

		const timeouts = [];

		const typeText1 = () => {
			for (let i = 0; i <= text1.length; i++) {
				timeouts.push(
					setTimeout(() => {
						setDisplayText1(text1.substring(0, i));
						if (i === text1.length) {
							setCurrentLine(2);
							typeText2();
						}
					}, i * 80)
				);
			}
		};

		const typeText2 = () => {
			for (let j = 0; j <= text2.length; j++) {
				timeouts.push(
					setTimeout(() => {
						setDisplayText2(text2.substring(0, j));
						if (j === text2.length) {
							setTimeout(() => setShowCursor(false), 200);
						}
					}, text1.length * 80 + 300 + j * 80)
				);
			}
		};

		typeText1();

		return () => {
			timeouts.forEach((timeout) => clearTimeout(timeout));
		};
	}, [heroCount]);

	return (
		<div className="hero" id="hero">
			<div className="hero-txt">
				<p className="typewriter-line">
					{displayText1}
					{showCursor && currentLine === 1 && <span className="cursor">|</span>}
				</p>
				<p className="typewriter-line">
					{displayText2}
					{showCursor && currentLine === 2 && <span className="cursor">|</span>}
				</p>
			</div>

			<div className="hero-bottom-bar">
				<div className="hero-play">
					<img
						onClick={() => setPlayStatus(!playStatus)}
						src={playStatus ? pause_icon : play_icon}
						alt=""
					/>
				</div>
				<div className="hero-dot-play">
					<ul className="hero-dots">
						<li
							onClick={() => setHeroCount(0)}
							className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
						></li>
						<li
							onClick={() => setHeroCount(1)}
							className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
						></li>
						<li
							onClick={() => setHeroCount(2)}
							className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
						></li>
					</ul>
				</div>
				<div className="hero-explore">
					<p>Explore the features</p>
					<img src={arrow_btn} alt="forward button" />
				</div>
			</div>
		</div>
	);
};
