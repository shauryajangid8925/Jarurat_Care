import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatientCard from '../components/PatientCard';
import PatientModal from '../components/PatientModal';
import ThreeDScene from '../components/ThreeDScene';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedPatientAge, setSelectedPatientAge] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    const filtered = patients.filter(patient =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPatients(filtered);
  }, [searchQuery, patients]);

  const fetchPatients = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      // Add stable age and healthScore fields here
      const processedPatients = response.data.map((p) => ({
        ...p,
        healthScore: Math.floor(Math.random() * 40) + 60,
        age: Math.floor(Math.random() * (80 - 18 + 1)) + 18
      }));

      setTimeout(() => {
        setPatients(processedPatients);
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      setError('Failed to fetch patients. Please try again later.');
      setIsLoading(false);
      console.error('Error fetching patients:', err);
    }
  };

  const handleViewDetails = (patient, age) => {
    setSelectedPatient(patient);
    setSelectedPatientAge(age);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
    setSelectedPatientAge(null);
  };

  if (error) {
    return (
      <div className="min-h-screen py-12 px-4 relative">
        <ThreeDScene />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-semibold text-red-800 mb-2">Error Loading Patients</h2>
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={fetchPatients}
                className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors duration-200 font-semibold"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen py-12 px-4 relative flex items-center justify-center">
        <ThreeDScene />
        <div className="container mx-auto max-w-6xl relative z-10 text-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading patient records...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <ThreeDScene />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Patient Records</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage and view all patient information in one secure, modern dashboard
          </p>
        </div>
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search patients by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 bg-white border border-gray-200 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
            />
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        {filteredPatients.length === 0 && patients.length > 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No patients found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPatients.map(patient => (
              <PatientCard
                key={patient.id}
                patient={patient}
                age={patient.age}
                healthScore={patient.healthScore}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
        <PatientModal
          patient={selectedPatient}
          age={selectedPatientAge}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default Patients;
