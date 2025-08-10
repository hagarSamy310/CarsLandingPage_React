import React from "react";
import "./Footer.css";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<p>© {new Date().getFullYear()} Luxury Cars. All rights reserved.</p>

				<div className="footer-links">
					<a href="#hero">Home</a>
					<a href="#about">About</a>
					<a href="#explore">Explore</a>
					<a href="#contact">Contact</a>
				</div>

				<div className="footer-social">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookF />
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedinIn />
					</a>
				</div>
			</div>
		</footer>
	);
};
