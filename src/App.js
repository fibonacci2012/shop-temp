import React, {useState} from 'react';
import imgLogo4 from "./img/dot4.png";
import imgLogo3 from "./img/dot3.png";
import imgLogo2 from "./img/dot2.png";
import imgLogo1 from "./img/dot1.png";
import imgLogo from "./img/logo_dots_black.png";
import imgTelegram from "./img/telegram.png";
import imgInstagram from "./img/instagram.png";
import imgPricelist from "./img/pricelist.png";
import './App.css';

function App() {
    const [shadow, setShadow] = useState({x: 0, y: 0});

    const handleMouseMove = (e) => {
        const xPos = e.clientX;
        const yPos = e.clientY;
        const offsetX = e.currentTarget.offsetLeft;
        const offsetY = e.currentTarget.offsetTop;
        const xShadow = Math.round((xPos - offsetX - e.currentTarget.offsetWidth / 2) / 10);
        const yShadow = Math.round((yPos - offsetY - e.currentTarget.offsetHeight / 2) / 10);
        setShadow({x: xShadow, y: yShadow});
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
            <div className="logo-container">
                <img src={imgLogo1} style={{boxShadow: `${shadow.x}px ${shadow.y}px 10px rgba(0, 0, 0, 0.5)`}}
                     alt="Logo"/>
                <img src={imgLogo2} style={{boxShadow: `${shadow.x}px ${shadow.y}px 10px rgba(0, 0, 0, 0.5)`}}
                     alt="Logo"/>
                <img src={imgLogo3} style={{boxShadow: `${shadow.x}px ${shadow.y}px 10px rgba(0, 0, 0, 0.5)`}}
                     alt="Logo"/>
                <img src={imgLogo4} style={{boxShadow: `${shadow.x}px ${shadow.y}px 10px rgba(0, 0, 0, 0.5)`}}
                     alt="Logo"/>


            </div>
            <div className="button-container">
                <button onClick={() => window.location.href = "https://t.me/roofspecialty"}
                        style={{boxShadow: `${shadow.x}px ${shadow.y}px 10px rgba(0, 0, 0, 0.5)`}}><img
                    src={imgTelegram} alt="Telegram icon"/></button>
                <button onClick={downloadFile}
                        style={{boxShadow: `${shadow.x}px ${shadow.y}px 10px rgba(0, 0, 0, 0.5)`}}><img
                    src={imgPricelist} alt="Pricelist icon"/></button>
                <button onClick={() => window.location.href = "https://www.instagram.com/roof.specialty.coffee/"}
                        style={{boxShadow: `${shadow.x}px ${shadow.y}px 10px rgba(0, 0, 0, 0.5)`}}><img
                    src={imgInstagram} alt="Instagram icon
        "/></button>
            </div>
        </div>
    );
}

export default App;
