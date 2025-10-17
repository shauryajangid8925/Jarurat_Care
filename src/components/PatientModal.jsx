import React, { useEffect } from 'react';

const PatientModal = ({ patient, age, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !patient) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4 z-50"
      style={{ paddingTop: '80px' }} // Makes sure modal is never under your header
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 animate-in fade-in-90 zoom-in-95"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-tl-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Patient Details</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Patient Avatar & Basic Info */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
              <span className="text-blue-600 font-bold text-3xl">
                {patient.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{patient.name}</h3>
              <p className="text-gray-600">Patient ID: {patient.id}</p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <label className="text-sm font-medium text-gray-500 block mb-2">Age</label>
              <p className="font-semibold text-gray-800 text-lg">{age} years</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <label className="text-sm font-medium text-gray-500 block mb-2">Email</label>
              <p className="font-semibold text-gray-800">{patient.email}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <label className="text-sm font-medium text-gray-500 block mb-2">Phone</label>
              <p className="font-semibold text-gray-800">{patient.phone}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <label className="text-sm font-medium text-gray-500 block mb-2">Address</label>
              <p className="font-semibold text-gray-800">
                {patient.address.street}, {patient.address.city}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {patient.address.zipcode}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <label className="text-sm font-medium text-gray-500 block mb-2">Company</label>
              <p className="font-semibold text-gray-800">{patient.company?.name}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <label className="text-sm font-medium text-gray-500 block mb-2">Website</label>
              <p className="font-semibold text-blue-600">{patient.website}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-xl hover:bg-gray-600 transition-colors duration-200 font-semibold"
            >
              Close
            </button>
            <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Edit Patient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
