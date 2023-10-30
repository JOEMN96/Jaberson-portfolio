import React from 'react';
import './Portfolio.scss';
import P1 from '../../Image/Portfolio/1.png';
import P3 from '../../Image/Portfolio/3.png';
import P4 from '../../Image/Portfolio/portfolio-3.png';

export default function Portfolio() {
  return (
    <div className="Portfolio" id="leftRightPadding" data-aos="fade-up">
      <div id="Portfolio">
        <div className="title">Portfolio</div>
        <div className="row ">
          <div className="col-sm-12 col-md-4" id="portfolioImg">
            <div className="Portfolio1">
              <a
                href="https://www.behance.net/gallery/181847857/UIUX-Case-Study-LM10-Mens-Wear-Responsive-Website"
                target="_blank"
                rel="noreferrer"
              >
                <div className="portfolioImg" id="PImg1">
                  <div className="PImg">
                    <img
                      src={P1}
                      alt=""
                      width={'100%'}
                      height={'100%'}
                      id="portfolioImg1"
                    />
                  </div>
                  <div className="hoverSlide">
                    <div className="text"> Responsive Website Design</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="Portfolio1" id="PImg2">
              <a
                href="https://www.behance.net/gallery/182124309/Portfolio-UIUX-Case-Study"
                target="_blank"
                rel="noreferrer"
              >
                <div className="portfolioImg" id="PImg1">
                  <div className="PImg">
                    <img
                      src={P3}
                      alt=""
                      width={'100%'}
                      height={'100%'}
                      id="portfolioImg1"
                    />
                  </div>
                  <div className="hoverSlide">
                    <div className="text"> Portfolio Light/Dark Mode </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="Portfolio1" id="PImg2">
              <a
                href="https://www.behance.net/gallery/182457875/Digital-Marketing-Website-Landing-Page"
                target="_blank"
                rel="noreferrer"
              >
                <div className="portfolioImg" id="PImg1">
                  <div className="PImg">
                    <img
                      src={P4}
                      alt=""
                      width={'100%'}
                      height={'100%'}
                      id="portfolioImg1"
                    />
                  </div>
                  <div className="hoverSlide">
                    <div className="text"> Digital Marketing website </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
