import React from 'react';
import { Link } from 'react-router-dom';
import ThreeDScene from '../components/ThreeDScene';
import { FaStethoscope, FaHeartbeat, FaClinicMedical, FaShieldAlt, FaBolt, FaUsers, FaChartLine, FaMobileAlt, FaCloud, FaUserShield } from 'react-icons/fa';

const Home = () => {
  const stats = [
    { number: '10,000+', label: 'Patients Managed', icon: FaUsers },
    { number: '99.9%', label: 'Uptime Reliability', icon: FaCloud },
    { number: '256-bit', label: 'Encryption', icon: FaShieldAlt },
    { number: '24/7', label: 'Support', icon: FaUserShield }
  ];

  const features = [
    {
      icon: FaStethoscope,
      title: 'Comprehensive Patient Profiles',
      description: 'Complete medical history, treatment plans, and progress tracking in one secure location.'
    },
    {
      icon: FaHeartbeat,
      title: 'Real-time Health Monitoring',
      description: 'Track vital signs, medications, and appointments with live updates and alerts.'
    },
    {
      icon: FaClinicMedical,
      title: 'Multi-clinic Management',
      description: 'Manage multiple healthcare facilities and practitioners from a single dashboard.'
    },
    {
      icon: FaChartLine,
      title: 'Advanced Analytics',
      description: 'Gain insights with detailed reports on patient outcomes and clinic performance.'
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile Responsive',
      description: 'Access patient records securely from any device, anywhere, anytime.'
    },
    {
      icon: FaBolt,
      title: 'Instant Search',
      description: 'Find patient records instantly with our intelligent search and filtering system.'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Medical Officer',
      organization: 'City General Hospital',
      content: 'Jarurat Care has revolutionized how we manage patient data. The intuitive interface saves us hours daily.',
      avatar: 'SC'
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Family Physician',
      organization: 'Community Health Clinic',
      content: 'The security features give me peace of mind, and my patients appreciate the organized care approach.',
      avatar: 'MR'
    },
    {
      name: 'Nurse Emily Watson',
      role: 'Head Nurse',
      organization: 'Regional Medical Center',
      content: 'Finally, a system that understands healthcare workflows. The mobile access is a game-changer for our team.',
      avatar: 'EW'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle animated background */}
      <ThreeDScene /> 

      {/* Hero section with headline and CTA */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-36 h-36 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-500 group">
                  <FaStethoscope className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 rounded-full opacity-70 animate-ping-slow"></div> 
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-blue-300 rounded-full animate-pulse-slow"></div> 
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Transforming{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Healthcare
              </span>
              <br />
              Through Innovation
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-loose">
              Experience the future of patient care with our 
              <span className="text-blue-700 font-extrabold"> AI-powered</span>, 
              <span className="text-blue-700 font-extrabold"> 3D-enhanced</span> healthcare management platform. 
              Streamline operations, enhance patient outcomes, and secure medical data with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                to="/patients"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaUsers className="w-5 h-5" />
                <span>Manage Patients</span>
              </Link>
              <Link
                to="/about"
                className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold text-lg hover:border-blue-600 flex items-center justify-center space-x-2"
              >
                <FaClinicMedical className="w-5 h-5" />
                <span>Learn More</span>
              </Link>
              <button className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold text-lg hover:border-blue-600 flex items-center justify-center space-x-2">
                <FaHeartbeat className="w-5 h-5" />
                <span>Demo</span>
              </button>
            </div>
          </div>

          {/* Stats display */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Jarurat Care?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Designed by healthcare professionals for healthcare professionals. 
              Every feature is built to enhance patient care and streamline medical practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Healthcare Professionals
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of medical practitioners who have transformed their practice with Jarurat Care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 cursor-pointer gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-blue-600">{testimonial.organization}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the healthcare revolution today. Experience the difference that modern, secure, 
            and efficient patient management can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/patients"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Managing Patients
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
              Schedule a Demo
            </button>
          </div>
          <p className="text-blue-200 mt-6 leading-relaxed">
            No credit card required • Setup in minutes • Free 30-day trial
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
