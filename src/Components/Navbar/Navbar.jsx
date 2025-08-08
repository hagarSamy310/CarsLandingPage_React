import "./Navbar.css";
export const Navbar = () => {
	return (
		<div className="nav">
			<div className="nav-logo">
				<h1>Luxury Cars</h1>
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
