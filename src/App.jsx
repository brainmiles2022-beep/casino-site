import React from 'react';

function CasinoLanding() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold mb-6 text-center">Welcome to Casino Royale</h1>
      <p className="text-xl mb-8 text-center">Where winning feels like second nature.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg mb-6">
        Start Playing
      </button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg text-lg">
        Learn More
      </button>
    </div>
  );
}

export default CasinoLanding;
