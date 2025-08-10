import React from "react";
import "./About.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const About = () => {
	
	const { ref, inView } = useInView({
		triggerOnce: false, 
		threshold: 0.3,
	});

	return (
		<section id="about" className="about" ref={ref}>
			<div className="about-container">
				<div className="about-header">
					<h2 className="about-title">About Us</h2>
					<div className="about-divider"></div>
				</div>

				<div className="about-content">
					<div className="about-text">
						<p className="about-description">
							Experience the pinnacle of automotive excellence with our curated
							collection of luxury vehicles. We bring together the world's most
							prestigious brands, offering unparalleled craftsmanship,
							cutting-edge technology, and timeless elegance.
						</p>
						<p className="about-description">
							From sleek sports cars to sophisticated sedans, each vehicle in
							our collection represents the perfect fusion of performance,
							comfort, and style. Discover the art of luxury driving with
							vehicles that redefine what it means to travel in class.
						</p>
					</div>

					<div className="about-stats">
						<div className="stat-item">
							<h3 className="stat-number">
								{inView && <CountUp end={500} duration={2} />}+
							</h3>
							<p className="stat-label">Premium Vehicles</p>
						</div>
						<div className="stat-item">
							<h3 className="stat-number">
								{inView && <CountUp end={50} duration={2} />}+
							</h3>
							<p className="stat-label">Luxury Brands</p>
						</div>
						<div className="stat-item">
							<h3 className="stat-number">
								{inView && <CountUp end={15} duration={2} />}+
							</h3>
							<p className="stat-label">Years Experience</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
