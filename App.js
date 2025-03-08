import React, { useState } from 'react';
import BirthdayGreeting from './components/BirthdayGreeting';
import WishForm from './components/WishForm';
import ESSCBoysText from './components/ESSCBoysText';
import WishList from './components/WishList';

function App() {
  const [wishes, setWishes] = useState([]);

  const addWish = (newWish) => {
    setWishes([...wishes, newWish]);
  };

  return (
    <div className="bg-gradient-to-r from-pink-200 to-purple-300 min-h-screen flex flex-col items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <BirthdayGreeting name="Muthu Annan" />
        <ESSCBoysText />
        <WishForm addWish={addWish} />
        <WishList wishes={wishes} />
      </div>
    </div>
  );
}

export default App;
