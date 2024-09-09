// About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          ABC Automation specializes in creating cutting-edge automation solutions for homes, hotels, resorts, and corporate offices. Our goal is to integrate smart technology into daily life to enhance convenience, efficiency, and sustainability. With a focus on innovation and customer satisfaction, we deliver custom automation systems tailored to meet the unique needs of each client.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become a global leader in automation by integrating smart technologies that transform the way people live and work, fostering innovation and sustainability in every solution we provide.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to design, develop, and implement state-of-the-art automation systems that improve efficiency and elevate everyday experiences for homes, businesses, and beyond.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <p className="text-gray-600">
              We offer personalized solutions, top-notch technology, and a dedicated team of experts to ensure that every project exceeds expectations and delivers lasting value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
