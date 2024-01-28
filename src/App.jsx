//! React qrl code 

import React from 'react';
import Qrcode from './Qrcode';
import "./Global.css";

const App = () => {
  return (
    <div className="container">
      <div className="input-container">
        <Qrcode />
      </div>
    </div>
  );
}

export default App;
