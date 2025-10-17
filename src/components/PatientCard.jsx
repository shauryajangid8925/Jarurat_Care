import React, { useState, useRef, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaUser, FaStethoscope } from 'react-icons/fa';

const PatientCard = ({ patient, age, healthScore, onViewDetails }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const getAvatarColor = (id) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-orange-500 to-orange-600',
      'from-pink-500 to-pink-600',
      'from-teal-500 to-teal-600',
    ];
    return colors[id % colors.length];
  };

  const getHealthStatus = (score) => {
    if (score >= 90) return { text: 'Excellent', color: 'text-green-500', bg: 'bg-green-100' };
    if (score >= 80) return { text: 'Good', color: 'text-blue-500', bg: 'bg-blue-100' };
    if (score >= 70) return { text: 'Fair', color: 'text-yellow-500', bg: 'bg-yellow-100' };
    return { text: 'Needs Attention', color: 'text-red-500', bg: 'bg-red-100' };
  };

  const healthStatus = getHealthStatus(healthScore);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 transform hover:-translate-y-1">
      <div className="flex items-center space-x-4 mb-4">
        <div
          className={`w-14 h-14 bg-gradient-to-br ${getAvatarColor(patient.id)} rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300`}
        >
          <FaUser className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 truncate">
            {patient.name}
          </h3>
          <div className="flex items-center space-x-3 mt-1">
            <p className="text-gray-600 font-medium flex items-center space-x-1">
              <FaUser className="w-3 h-3 text-gray-400" />
              <span>Age: {age}</span>
            </p>
            <span className="text-gray-300">•</span>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${healthStatus.bg} ${healthStatus.color}`}>
              {healthStatus.text}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">Health Score</span>
          <span className="text-sm font-bold text-gray-800">{healthScore}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              healthScore >= 90 ? 'bg-green-500' :
              healthScore >= 80 ? 'bg-blue-500' :
              healthScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${healthScore}%` }}
          ></div>
        </div>
      </div>
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-600">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 transition-colors duration-200">
            <FaPhone className="w-3 h-3 text-blue-500" />
          </div>
          <span className="font-medium truncate">{patient.phone}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-3 transition-colors duration-200">
            <FaEnvelope className="w-3 h-3 text-green-500" />
          </div>
          <span className="font-medium truncate">{patient.email}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center mr-3 transition-colors duration-200">
            <FaStethoscope className="w-3 h-3 text-purple-500" />
          </div>
          <span className="font-medium truncate text-sm">
            {patient.company?.name || 'General Practice'}
          </span>
        </div>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={() => onViewDetails(patient, age)}
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <FaUser className="w-4 h-4" />
          <span>View Details</span>
        </button>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen((prev) => !prev);
            }}
            className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-200 flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-[9999]">
              <div className="py-2">
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>Edit Patient</span>
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Schedule Visit</span>
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>Delete Patient</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Last Visit</span>
          <span className="font-medium text-gray-700">
            {new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PatientCard);
