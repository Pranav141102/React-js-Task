import React from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker';

function App() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF33A4",
    "#33A4FF",
    "#A4FF33",
    "#FF338C",
    "#338CFF",
    "#8CFF33",
    "#FF33EC",
    "#33ECFF",
    "#ECFF33",
    "#FF3333",
    "#3333FF",
    "#FF9933",
    "#FF3399",
    "#3399FF",
    "#33FF99",
    "#9933FF",
    "#99FF33",
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <ColorPicker colors={colors} />
      </header>
    </div>
  );
}

export default App;