import React, { useState } from "react";
import "./Navbar.css";
export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const logoText = "Luxury Cars";
	return (
		<div className="nav">
			<div className="nav-logo">
				<h1 className="animated-logo">
					{logoText.split("").map((letter, index) => (
						<span key={index} className="letter">
							{letter === " " ? "\u00A0" : letter}
						</span>
					))}
				</h1>
			</div>
			<ul className={`nav-menu${menuOpen ? " open" : ""}`}>
				<li>
					<a href="#hero" onClick={() => setMenuOpen(false)}>
						Home
					</a>
				</li>
				<li>
					<a href="#explore" onClick={() => setMenuOpen(false)}>
						Explore
					</a>
				</li>
				<li>
					<a href="#about" onClick={() => setMenuOpen(false)}>
						About
					</a>
				</li>
				<li className="nav-contact">
					<a href="#contact" onClick={() => setMenuOpen(false)}>
						Contact
					</a>
				</li>
			</ul>
			<div
				className={`hamburger${menuOpen ? " active" : ""}`}
				onClick={() => {
					if (!menuOpen) setMenuOpen(true);
				}}
			>
				<span></span>
				<span></span>
				<span></span>
				{menuOpen && (
					<button
						className="close-btn"
						aria-label="Close menu"
						onClick={(e) => {
							e.stopPropagation();
							setMenuOpen(false);
						}}
					>
						<svg viewBox="0 0 22 22" fill="none">
							<line
								x1="3"
								y1="3"
								x2="19"
								y2="19"
								stroke="currentColor"
							/>
							<line
								x1="19"
								y1="3"
								x2="3"
								y2="19"
								stroke="currentColor"
							/>
						</svg>
					</button>
				)}
			</div>
		</div>
	);
};
