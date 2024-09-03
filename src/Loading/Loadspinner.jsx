import React from 'react';

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative flex items-center justify-center">
        <div className="absolute flex items-center justify-center w-24 h-24">
          {/* Dots */}
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full dot1"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full dot2"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full dot3"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full dot4"></div>
          {/* Loading Text */}
          <span className="text-lg font-bold text-gray-700">Loading</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
