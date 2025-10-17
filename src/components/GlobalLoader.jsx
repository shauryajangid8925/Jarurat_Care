import React from 'react';
import { useLoader } from '../context/LoaderContext';

const GlobalLoader = () => {
  const { loading } = useLoader();

  if (!loading) return null; // Don't render if not loading

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated loader pulse effect */}
        <div className="w-32 h-32 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 bg-blue-200 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Loading</h3>
        <p className="text-gray-600">Please wait while we fetch your data...</p>
        
        {/* Pulse dots animation to indicate loading */}
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoader;
