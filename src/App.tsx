import React from 'react';
import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="flex flex-col items-center text-center">
          <Heart className="text-pink-500 mb-4 h-10 w-10" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Perfectly Centered</h2>
          <p className="text-gray-600 leading-relaxed">
            This content is precisely centered both horizontally and vertically within the viewport.
            Hover to see a subtle animation effect.
          </p>
          <div className="mt-6 w-full h-1 bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default App;