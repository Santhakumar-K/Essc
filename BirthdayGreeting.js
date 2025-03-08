import React from 'react';

function BirthdayGreeting({ name }) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold text-pink-600 mb-4 animate-pulse">Happy Birthday, {name}! 🎉</h1>
      <p className="text-xl text-gray-700">Wishing you a day filled with joy, laughter, and unforgettable moments! 🥳</p>
    </div>
  );
}

export default BirthdayGreeting;
