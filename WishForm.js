import React, { useState } from 'react';
import { Mail } from 'lucide-react';

function WishForm({ addWish }) {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && wish.trim() !== '') {
      addWish({ name, wish });
      setName('');
      setWish('');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Send Your Birthday Wish 💌</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Your Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="wish">
            Your Wish:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="wish"
            placeholder="Enter your birthday wish"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Wish <Mail className="inline-block ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default WishForm;
