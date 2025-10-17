import React, { createContext, useState, useContext } from 'react';

const LoaderContext = createContext();

// Custom hook to access loader context safely
export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};

// Provider component to manage and expose loading state
export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  const value = {
    loading,
    showLoader,
    hideLoader,
  };

  return (
    <LoaderContext.Provider value={value}>
      {children}
    </LoaderContext.Provider>
  );
};
