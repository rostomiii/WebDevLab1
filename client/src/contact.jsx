import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {

    // Used to redirect the user after submitting the form
    const navigate = useNavigate();

    // Stores the information entered into the contact form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    // Updates formData whenever the user types in an input
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handles the form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Displays captured information in the browser console
        console.log('Contact Form Information:', formData);

        // Redirects the user back to the Home page
        navigate('/');
    };

    return (
        <main className="contact-page">

            {/* Contact Page Header */}
            <section className="contact-header">
                <p className="section-label">GET IN TOUCH</p>
                <h1>Contact Me</h1>

                <p>
                    Have a question or want to connect? Feel free to send
                    me a message using the form below.
                </p>
            </section>

            <section className="contact-container">

                {/* Contact Information Panel */}
                <div className="contact-info">
                    <h2>Contact Information</h2>

                    <p>
                        You can contact me using the form or connect with
                        me through the information below.
                    </p>

                    <div className="contact-detail">
                        <h3>Location</h3>
                        <p>Ontario, Canada</p>
                    </div>

                    <div className="contact-detail">
                        <h3>Email</h3>
                        <p>rlamadri@my.centennialcollege.ca</p>
                    </div>

                    <div className="contact-detail">
                        <h3>Availability</h3>
                        <p>
                            Open to software development opportunities,
                            projects, and professional connections.
                        </p>
                    </div>
                </div>


                {/* Contact Form */}
                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="firstName">
                                First Name
                            </label>

                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="lastName">
                                Last Name
                            </label>

                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>


                    <div className="form-group">
                        <label htmlFor="contactNumber">
                            Contact Number
                        </label>

                        <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="email">
                            Email Address
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>


                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Send Message
                    </button>

                </form>

            </section>
        </main>
    );
}