import "./Navbar.css";
export const Navbar = () => {
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
			<ul className="nav-menu">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#explore">Explore</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li className="nav-contact">
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	);
};
