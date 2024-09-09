// ContactForm.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_gh4cfus', // Your EmailJS service ID
        'template_36e0c0s', // Your EmailJS template ID
        formData,
        '3fSJkXHl8ZNn9Q6sY' // Your EmailJS public API key
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
          setFormError(false);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          setFormError(true);
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-center text-lg text-gray-600 mb-8">We'd love to hear from you! Send us a message below.</p>

        <form onSubmit={sendEmail} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>

          {formSubmitted && <p className="text-green-500 mb-4">Thank you! Your message has been sent.</p>}
          {formError && <p className="text-red-500 mb-4">There was an error sending your message. Please try again.</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} ABC Automation. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </section>
  );
};

export default Contact;
