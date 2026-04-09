import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    workshop: 'Python',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration Successful for ${formData.name}!`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-6 font-sans">
      {/* Header */}
      <header className="w-full max-w-2xl flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight">FOSSEE</h1>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase">IIT Bombay</span>
      </header>

      {/* Booking Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-blue-600 p-6 text-center text-white">
          <h2 className="text-2xl font-bold">Workshop Booking</h2>
          <p className="text-blue-100 text-sm mt-1 opacity-90">Secure your spot in the upcoming session</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-300"
              placeholder="Enter your name"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-300"
              placeholder="name@college.edu"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Workshop Selection */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Choose Workshop</label>
            <select 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none bg-slate-50 cursor-pointer"
              onChange={(e) => setFormData({...formData, workshop: e.target.value})}
            >
              <option>Python</option>
              <option>Scilab</option>
              <option>eSim</option>
              <option>LaTeX</option>
            </select>
          </div>

          {/* Submit */}
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 transform transition active:scale-95"
          >
            Register Now
          </button>
        </form>
      </div>

      <footer className="mt-auto py-8 text-slate-400 text-sm">
        Designed for Mobile Users • Keshav Pareek (ECB)
      </footer>
    </div>
  );
}

export default App;
