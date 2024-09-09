// eslint-disable-next-line no-unused-vars
import React from 'react';
import project1 from './assets/homeauto.jpg'
import hotelAuto from './assets/hotelauto.jpg'
import industryAuto from './assets/industry.jpg'
const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to ABC Automation </h1>
          <p className="mt-4 text-xl">We create amazing solutions to help your business grow.</p>
          <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </header>

      {/* Showcase Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Showcase Item 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project1} alt="Home" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Home Automation</h3>
                <p className="text-gray-700">We specializes in 
                  home automation solutions, offering smart control systems that 
                  enhance convenience and security for residential spaces. Our showcase
                   website highlights innovative automation projects designed to seamlessly 
                   integrate lighting, climate control, and security features into a unified,
                    user-friendly platform.</p>
              </div>
            </div>

            {/* Showcase Item 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={hotelAuto} alt="Project 2" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Hotel Automation</h3>
                <p className="text-gray-700">We provides advanced hotel automation systems that optimize guest 
                  experiences and streamline hotel operations. Our showcase website features cutting-edge solutions
                   for automated room controls, intelligent lighting, and efficient energy management, all designed 
                   to enhance comfort and operational efficiency in hospitality environments.</p>
              </div>
            </div>

            {/* Showcase Item 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={industryAuto} alt="Project 3" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Industrial Automation</h3>
                <p className="text-gray-700">delivers industry-leading automation solutions tailored for industrial environments, enhancing efficiency,
                   safety, and productivity. Our showcase website highlights innovative projects that integrate process automation, real-time monitoring, and smart control systems to 
                  optimize industrial operations and reduce downtime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} ABC Automation. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default LandingPage;
