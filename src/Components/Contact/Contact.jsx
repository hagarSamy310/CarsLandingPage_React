import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setFormData({
			name: "",
			email: "",
			phone: "",
			message: "",
		});
	};

	return (
		<section id="contact" className="contact">
			<div className="contact-container">
				<div className="contact-header">
					<h2 className="contact-title">Get In Touch</h2>
					<div className="contact-divider"></div>
					<p className="contact-subtitle">
						Ready to experience luxury? Contact us today!
					</p>
				</div>

				<div className="contact-content">
					<div className="contact-info">
						<div className="info-item">
							<h3 className="info-title">Visit Our Showroom</h3>
							<p className="info-text">
								123 Luxury Avenue
								<br />
								Beverly Hills, CA 90210
								<br />
								United States
							</p>
						</div>

						<div className="info-item">
							<h3 className="info-title">Call Us</h3>
							<p className="info-text">
								+1 (555) 123-4567
								<br />
								+1 (555) 987-6543
							</p>
						</div>

						<div className="info-item">
							<h3 className="info-title">Email</h3>
							<p className="info-text">
								info@luxurycars.com
								<br />
								sales@luxurycars.com
							</p>
						</div>

						<div className="info-item">
							<h3 className="info-title">Business Hours</h3>
							<p className="info-text">
								Monday - Friday: 9:00 AM - 7:00 PM
								<br />
								Saturday: 10:00 AM - 6:00 PM
								<br />
								Sunday: 12:00 PM - 5:00 PM
							</p>
						</div>
					</div>

					<div className="contact-form-container">
						<form className="contact-form" onSubmit={handleSubmit}>
							<div className="form-group">
								<input
									type="text"
									name="name"
									placeholder="Full Name"
									value={formData.name}
									onChange={handleChange}
									required
									className="form-input"
								/>
							</div>

							<div className="form-group">
								<input
									type="email"
									name="email"
									placeholder="Email Address"
									value={formData.email}
									onChange={handleChange}
									required
									className="form-input"
								/>
							</div>

							<div className="form-group">
								<input
									type="tel"
									name="phone"
									placeholder="Phone Number"
									value={formData.phone}
									onChange={handleChange}
									className="form-input"
								/>
							</div>

							<div className="form-group">
								<textarea
									name="message"
									placeholder="Tell us about your dream car..."
									value={formData.message}
									onChange={handleChange}
									required
									className="form-textarea"
									rows="5"
								></textarea>
							</div>

							<button type="submit" className="contact-btn">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
