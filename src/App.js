import React, {useEffect, useState} from 'react';
import imgLogo4 from "./img/dot4.png";
import imgLogo3 from "./img/dot3.png";
import imgLogo2 from "./img/dot2.png";
import imgLogo1 from "./img/dot1.png";
import imgTelegram from "./img/telegram.png";
import imgInstagram from "./img/instagram.png";
import imgPricelist from "./img/pricelist.png";
import './App.css';

function App() {
    /*  const [shadow, setShadow] = useState({x: 3, y: 3});

      const [shadow1, setShadow1] = useState({
          x: 0,
          y: 0,
      });

      useEffect(() => {
          const handleSensor = (event) => {
              const {rotationRate} = event;
              setShadow({
                  x: rotationRate.beta,
                  y: rotationRate.gamma,
              });
          };
          if (window.DeviceMotionEvent) {
              window.addEventListener('devicemotion', handleSensor, true);
          }
          return () => {
              window.removeEventListener('devicemotion', handleSensor);
          };
      }, []);

      const handleMouseMove = (e) => {
          const xPos = e.clientX;
          const yPos = e.clientY;
          const offsetX = e.currentTarget.offsetLeft;
          const offsetY = e.currentTarget.offsetTop;
          const xShadow = Math.round((xPos - offsetX - e.currentTarget.offsetWidth / 2) / 20);
          const yShadow = Math.round((yPos - offsetY - e.currentTarget.offsetHeight / 2) / 20);
          setShadow({x: xShadow, y: yShadow});
      };
      const imgShadow = {filter: `drop-shadow(${shadow.x}px ${shadow.y}px 5px rgba(0,0,0,0.5))`};
      const imgShadowMob = {filter: `drop-shadow(${shadow1.x}px ${shadow1.y}px 5px rgba(0,0,0,0.5))`};*/
    const [shadowParams, setShadowParams] = useState({
        blur: 10,
        xShadow: 0,
        yShadow: 0,
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const xPos = e.clientX;
            const yPos = e.clientY;
            const offsetX = e.currentTarget.offsetLeft;
            const offsetY = e.currentTarget.offsetTop;
            const xShadow = Math.round((xPos - offsetX - e.currentTarget.offsetWidth / 2) / 20);
            const yShadow = Math.round((yPos - offsetY - e.currentTarget.offsetHeight / 2) / 20);

            setShadowParams({blur: 10, xShadow, yShadow});
        };


        const handleDeviceMotion = (e) => {
            DeviceMotionEvent.requestPermission().then(response => {
                if (response === 'granted') {
                    window.addEventListener('devicemotion', (e) => {
                        const x = e.accelerationIncludingGravity.x * 5;
                        const y = e.accelerationIncludingGravity.y * 5;
                        setShadowParams({blur: 10, xShadow: x, yShadow: y});
                    });
                }
            })
        };


        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const targetElement = document.querySelector('body');

        if (isMobile && targetElement) {
            window.addEventListener('devicemotion', handleDeviceMotion);
        } else if (targetElement) {
            targetElement.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (isMobile && targetElement) {
                window.removeEventListener('devicemotion', handleDeviceMotion);
            } else if (targetElement) {
                targetElement.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    const {blur, xShadow, yShadow} = shadowParams;
    const imgShadow = {filter: `drop-shadow(${xShadow}px ${yShadow}px ${blur}px rgba(0,0,0,0.5))`};

    return (
        <div className="container">
            <div className="shadow-element">
                <div className="logo-container--dots" style={imgShadow}>
                    <a href="https://t.ly/BjM7" target="_blank">
                        <img src={imgLogo1} alt="Logo1"/>
                    </a>
                    <img src={imgLogo2} alt="Logo2"/>
                    <img src={imgLogo3} alt="Logo3"/>
                    <img src={imgLogo4} alt="Logo4"/>
                </div>
                <div className="button-container" style={imgShadow}>
                    <button className="buttons"
                            onClick={() => window.location.href = "https://t.me/roofspecialty"}>
                        <img src={imgTelegram} alt="Telegram icon"/>
                    </button>
                    <button className="buttons"  onClick={() => window.location.href = "http://roofcoffee.com.ua/price/"}><img
                        src={imgPricelist} alt="Pricelist icon"/></button>
                    <button className="buttons"
                            onClick={() => window.location.href = "https://www.instagram.com/roof.specialty.coffee/"}>
                        <img src={imgInstagram} alt="Instagram icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
