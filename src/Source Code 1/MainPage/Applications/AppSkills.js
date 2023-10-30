import React from 'react';
import './AppSkills.scss';
import figmaImg from '../../Image/Applications/Figma.png';
import AdobeXD from '../../Image/Applications/XD.png';
import AdobePhotoshop from '../../Image/Applications/ps.png';
import AdobeIllustrator from '../../Image/Applications/Ai.png';

export default function AppSkills() {
  // var copy = document.querySelector(".track").cloneNode(true);
  // document.querySelector(".wrapper").appendChild(copy);
  return (
    <div>
      <div className="container-fluid">
        <div className="row " id="app">
          <div className="wrapper">
            <div className="track" id="track">
              <div className="logo">
                Figma <img src={figmaImg} alt="" />
              </div>
              <div className="logo">
                Adobe XD <img src={AdobeXD} alt="" />
              </div>
              <div className="logo">
                Adobe Photoshop <img src={AdobePhotoshop} alt="" />
              </div>
              <div className="logo">
                Adobe Illustrator <img src={AdobeIllustrator} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
