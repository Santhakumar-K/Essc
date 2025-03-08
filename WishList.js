import React from 'react';

function WishList({ wishes }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Birthday Wishes:</h2>
      {wishes.length === 0 ? (
        <p className="text-gray-600 text-center">No wishes yet. Be the first to send one! 🎉</p>
      ) : (
        <ul className="space-y-4">
          {wishes.map((wish, index) => (
            <li key={index} className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-700"><span className="font-bold">{wish.name}:</span> {wish.wish}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WishList;
