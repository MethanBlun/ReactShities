import './App.css';
import React, { useState } from 'react';

function App() {
  // Données statiques d'exemple
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com' }
  ];

  // État pour contrôler l'ouverture du drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Welcome to Your Home Page</h1>
      <div className="w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">General Content</h2>
          <p className="text-gray-700">This content is always visible regardless of the screen size.</p>
        </div>

        <div className="hidden lg:block mt-8">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            Toggle Drawer
          </button>

          <div
            className={`fixed top-0 left-0 h-full bg-blue-100 p-6 shadow-lg transform transition-transform ${
              isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">Drawer Menu</h2>
            <p className="text-gray-700">This drawer is only visible on large screens (lg and above).</p>
            <div className="mt-4">
              {/* Tableau d'exemple pour afficher les données */}
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">ID</th>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2 px-4 border-b">{item.id}</td>
                      <td className="py-2 px-4 border-b">{item.name}</td>
                      <td className="py-2 px-4 border-b">{item.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
