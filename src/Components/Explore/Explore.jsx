import React from "react";
import "./Explore.css";

export const Explore = () => {
	const cars = [
		{
			id: 1,
			name: "Ferrari F8 Tributo",
			category: "Sports Car",
			price: "$280,000",
			features: ["V8 Twin-Turbo", "710 HP", "0-60 in 2.9s"],
			image:
				"https://images.unsplash.com/photo-1655593972695-919eb269b0df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZlcnJhcmklMjBmOHxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			id: 2,
			name: "Rolls-Royce Phantom",
			category: "Luxury Sedan",
			price: "$460,000",
			features: ["V12 Engine", "563 HP", "Ultimate Comfort"],
			image:
				"https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Um9sbHMlMjBSb3ljZSUyMFBoYW50b218ZW58MHx8MHx8fDA%3D",
		},
		{
			id: 3,
			name: "Lamborghini Huracán",
			category: "Supercar",
			price: "$240,000",
			features: ["V10 Engine", "630 HP", "All-Wheel Drive"],
			image:
				"https://images.unsplash.com/photo-1621285853634-713b8dd6b5fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFtYm9yZ2hpbmklMjBIdXJhYyVDMyVBMW58ZW58MHx8MHx8fDA%3D",
		},
		{
			id: 4,
			name: "Bentley Continental GT",
			category: "Grand Tourer",
			price: "$230,000",
			features: ["W12 Engine", "626 HP", "Handcrafted Interior"],
			image:
				"https://images.unsplash.com/photo-1576668273906-4c087ac1dc85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmVudGxleSUyMENvbnRpbmVudGFsJTIwR1R8ZW58MHx8MHx8fDA%3D",
		},
		{
			id: 5,
			name: "McLaren 720S",
			category: "Supercar",
			price: "$300,000",
			features: ["V8 Twin-Turbo", "710 HP", "Carbon Fiber"],
			image:
				"https://images.unsplash.com/photo-1617335692042-7a3779b8e050?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1jTGFyZW4lMjA3MjBTfGVufDB8fDB8fHww",
		},
		{
			id: 6,
			name: "Aston Martin DB11",
			category: "Grand Tourer",
			price: "$210,000",
			features: ["V8/V12 Options", "630 HP", "British Elegance"],
			image:
				"https://images.unsplash.com/photo-1611838609137-b457d4ce8267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFzdG9uJTIwTWFydGluJTIwREIxMXxlbnwwfHwwfHx8MA%3D%3D",
		},
	];

	return (
		<section id="explore" className="explore">
			<div className="explore-container">
				<div className="explore-header">
					<h2 className="explore-title">Explore Our Collection</h2>
					<div className="explore-divider"></div>
					<p className="explore-subtitle">
						Discover the world's most exclusive luxury vehicles
					</p>
				</div>

				<div className="cars-grid">
					{cars.map((car) => (
						<div key={car.id} className="car-card">
							<img src={car.image} alt={car.name} className="car-image" />
							<div className="car-card-header">
								<h3 className="car-name">{car.name}</h3>
								<span className="car-category">{car.category}</span>
							</div>

							<div className="car-price">
								<span className="price-label">Starting at</span>
								<span className="price-value">{car.price}</span>
							</div>

							<div className="car-features">
								{car.features.map((feature, index) => (
									<span key={index} className="feature-tag">
										{feature}
									</span>
								))}
							</div>

							<button className="explore-btn">View Details</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
