import React, { useState } from 'react';
import imgLogo from "./img/logo_dots_black.png";
import imgTelegram from "./img/telegram.png";
import imgInstagram from "./img/instagram.png";
import './App.css';

function App() {
  const [shadow, setShadow] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const xPos = e.clientX;
    const yPos = e.clientY;
    const offsetX = e.currentTarget.offsetLeft;
    const offsetY = e.currentTarget.offsetTop;
    const xShadow = Math.round((xPos - offsetX - e.currentTarget.offsetWidth / 2) / 10);
    const yShadow = Math.round((yPos - offsetY - e.currentTarget.offsetHeight / 2) / 10);
    setShadow({ x: xShadow, y: yShadow });
  };
  // Comm for commit
  const downloadFile = () => {
  const url = './rsc/Roof-price.pdf';
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Price List.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
};

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div className="logo-container" style={{ boxShadow: `${shadow.x}px ${shadow.y}px 10px rgba(0, 0, 0, 0.5)` }}>
        <img src={imgLogo} alt="Logo" />
      </div>
      <div className="button-container">
        <button onClick={downloadFile}>Price List</button>
        <button onClick={() => window.location.href="https://t.me/roofspecialty"}><img src={imgTelegram} alt="Telegram icon"/></button>
        <button onClick={() => window.location.href="https://www.instagram.com/roof.specialty.coffee/"}><img src={imgInstagram} alt="Instagram icon
        "/></button>
      </div>
    </div>
  );
}

export default App;
