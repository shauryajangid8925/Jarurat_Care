import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShieldAlt,
  FaBolt,
  FaChevronRight,
  FaLock,
  FaUserShield,
  FaRocket,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
  HiShieldCheck,
} from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Quick navigation links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Patients", path: "/patients" },
    { name: "About", path: "/about" },
  ];

  // List of available services
  const services = [
    "Patient Records",
    "Medical History",
    "Appointment Scheduling",
    "Health Analytics",
  ];

  // Contact information with icons
  const contactInfo = [
    {
      icon: <HiLocationMarker className="w-5 h-5" />,
      text: "123 Healthcare Ave, Medical District, City 12345",
    },
    {
      icon: <HiPhone className="w-5 h-5" />,
      text: "+1 (555) 123-4567",
    },
    {
      icon: <HiMail className="w-5 h-5" />,
      text: "support@jaruratcare.com",
    },
  ];

  // Social media links with icons and hover colors
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF className="w-4 h-4" />,
      url: "#",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-4 h-4" />,
      url: "#",
      color: "hover:bg-blue-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="w-4 h-4" />,
      url: "#",
      color: "hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-4 h-4" />,
      url: "#",
      color: "hover:bg-pink-600",
    },
  ];

  // Key features highlighted in the footer
  const features = [
    {
      icon: <FaHeart className="w-5 h-5" />,
      title: "Patient First",
      description: "Built with patient care as our top priority",
    },
    {
      icon: <FaLock className="w-5 h-5" />,
      title: "Secure Data",
      description: "Enterprise-grade security for all medical records",
    },
    {
      icon: <FaBolt className="w-5 h-5" />,
      title: "Fast & Reliable",
      description: "Lightning-fast performance with 99.9% uptime",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Features section */}
      <div className="bg-white/10 border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 text-center md:text-left"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base md:text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10">

          {/* Company info with social links */}
          <div className="lg:col-span-1 flex flex-col">
            <Link to="/">
              <img
                src="/logo/jc.png"
                alt="Jarurat Care Logo"
                className="w-[280px] h-[70px] mb-5 rounded-xl object-contain shadow-lg border border-gray-200 bg-white"
              />
            </Link>

            <p className="text-gray-200 mb-6 text-left leading-relaxed text-base">
              <b className="text-white">
                Revolutionizing healthcare management
              </b>{" "}
              through cutting-edge technology. Providing secure, efficient, and modern patient record solutions for healthcare professionals worldwide.
            </p>
            <div className="flex space-x-3 mb-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none ${social.color}`}
                  aria-label={social.name}
                  tabIndex={0}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation quick links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center tracking-wide">
              <FaChevronRight className="w-4 h-4 mr-2 text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-200 hover:text-blue-400 transition-all duration-200 flex items-center space-x-2 group font-medium"
                  >
                    <FaChevronRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services offered */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center tracking-wide">
              <FaBolt className="w-4 h-4 mr-2 text-green-400" />
              Our Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-200 hover:text-green-300 transition-all duration-200 flex items-center space-x-2 group cursor-pointer font-medium">
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                    <span>{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details and newsletter form */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center tracking-wide">
              <HiMail className="w-5 h-5 mr-2 text-purple-400" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <div className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {contact.icon}
                  </div>
                  <span className="text-gray-200 group-hover:text-white text-left transition-colors duration-200 text-sm">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Newsletter signup form */}
            <div className="mt-8 w-full max-w-xs">
              <h4 className="text-base font-semibold mb-3 text-white flex items-center">
                <FaRocket className="w-4 h-4 mr-2 text-orange-400" />
                Stay Updated
              </h4>
              <form className="flex flex-col sm:flex-row w-full gap-2" autoComplete="off">
                <input
                  type="email"
                  aria-label="Your email"
                  placeholder="Enter your email"
                  className="flex-1 max-w-[190px] px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 font-medium flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
                >
                  <HiMail className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer bottom bar with copyright and policies */}
        <div className="border-t border-white/10 pt-8 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-200 text-sm flex items-center space-x-2">
              <HiShieldCheck className="w-4 h-4 text-green-400" />
              <span>© {currentYear} Jarurat Care. All rights reserved.</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 text-sm">
              <a
                href="#"
                className="text-gray-200 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-1 focus:underline"
              >
                <FaLock className="w-3 h-3" />
                <span>Privacy Policy</span>
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-1 focus:underline"
              >
                <FaUserShield className="w-3 h-3" />
                <span>Terms of Service</span>
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-1 focus:underline"
              >
                <FaShieldAlt className="w-3 h-3" />
                <span>Cookie Policy</span>
              </a>
            </div>
          </div>
        </div>

        {/* Healthcare compliance badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-8 border-t border-white/10">
          <div className="text-center group cursor-pointer">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <HiShieldCheck className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-200">
              HIPAA Compliant
            </span>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <FaLock className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-200">
              Secure Data
            </span>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <FaBolt className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-200">
              Fast & Reliable
            </span>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <FaHeart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-200">
              Patient First
            </span>
          </div>
        </div>
      </div>

      {/* Floating medical icons for visual effect */}
      <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none">
        <FaHeart className="w-16 h-16 text-white animate-pulse" />
      </div>
      <div className="absolute top-4 left-4 opacity-10 pointer-events-none">
        <FaShieldAlt
          className="w-12 h-12 text-white animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Optional back-to-top button commented out */}
      {/* <button 
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to Top"
      >
        <FaChevronUp className="w-5 h-5" />
      </button> */}
    </footer>
  );
};

export default Footer;
