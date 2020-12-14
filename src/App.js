import React from "react";
import profileImage from "./img/vic.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My react App</h1>
      <h2>Author: Victor Olayinka</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
