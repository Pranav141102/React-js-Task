import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDateArray = birthDate.split('-');
    if (birthDateArray.length === 3) {
      const birthYear = parseInt(birthDateArray[0], 10);
      const birthMonth = parseInt(birthDateArray[1], 10);
      const birthDay = parseInt(birthDateArray[2], 10);

      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1; // Month is 0-indexed
      const currentDay = today.getDate();

      let calculatedAge = currentYear - birthYear;

      if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        calculatedAge--;
      }

      setAge(calculatedAge);
    } else {
      setAge('Invalid date');
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label htmlFor="birthDate">Enter your birthdate:</label>
      <input
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      <p>Your age is: {age}</p>
    </div>
  );
}

export default App;