import React, { useState } from 'react';

const LandingPage = () => {
  // State to manage the email input
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the email submission (e.g., API call)
    console.log('Email submitted:', email);
    // Reset email input after submission
    setEmail('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-5">
      {/* Hero Section */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Sports Club</h1>
        <p className="text-lg">Join our community and stay updated with the latest news!</p>
      </header>

      {/* Newsletter Subscription Form */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-lg">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400 transition duration-200"
        />
        <button
          type="submit"
          className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition duration-200"
        >
          Subscribe
        </button>
      </form>

      {/* Footer Section */}
      <footer className="mt-10 text-sm">
        <p>&copy; 2023 Sports Club. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;