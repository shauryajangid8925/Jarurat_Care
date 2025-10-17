import React from 'react';
import ThreeDScene from '../components/ThreeDScene';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 relative">
      <ThreeDScene />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Jarurat Care</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Mission statement */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Jarurat Care is dedicated to revolutionizing healthcare management through 
            cutting-edge technology. Our Patient Records Dashboard combines modern 3D 
            visualization with robust data management to provide healthcare professionals 
            with tools they need to deliver exceptional patient care.
          </p>
        </div>

        {/* Features highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: 'Advanced Technology',
              description: 'Leveraging Three.js and modern web technologies for an immersive experience',
              icon: '💻'
            },
            {
              title: 'Patient-First',
              description: 'Designed with both healthcare providers and patients in mind',
              icon: '❤️'
            },
            {
              title: 'Secure & Compliant',
              description: 'Built with security and healthcare compliance as top priorities',
              icon: '🔒'
            },
            {
              title: 'Always Evolving',
              description: 'Continuous improvements and feature updates based on user feedback',
              icon: '🚀'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics display */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '10K+', label: 'Patients Served' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' },
              { number: '100%', label: 'Secure' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Ready to transform your patient management experience?
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
