import React from 'react'
import "./About.scss"
import AboutImg from "../../Image/AboutImg/AboutImg.png"
import Resume from "../../resume/Resume - Jaberson.pdf"
import HiThere from "../../Image/AboutImg/HI.png"

export default function About() {
    return (
        <div className='mainAbout' id='About' data-aos="fade-up">
            <div className='container-fluid' id='leftRightPadding'>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="AboutImage ">
                            <img src={AboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">

                        <div className='AboutMe'>
                            <div className="AboutTitle">
                                About Me
                            </div>
                            <div className="HiThere">
                               <img src={HiThere} alt="" />
                            </div>
                            <div className="content">
                                I'm a UI/UX Designer based in Tamilnadu India, with a passion for designing beautiful
                                and functional user experiences. I love making digital things look great and work even
                                better. I'm super excited about learning new things and stay up-to-date with the latest
                                design trends. Let's create something amazing together!
                            </div>
                            <div className="buttonsHere">
                                <div className="hereMe1" >
                                    <div className='d-flex HireMeBtn'>
                                        <div className='btnsHere'>
                                            <a href="#Contact">
                                                <button type='button' className='btn hereMe text-uppercase p-3' id='hereMe'>
                                                    <span className='AboutBtn'>Hire Me</span>
                                                </button></a>
                                        </div>
                                        <div>
                                            <a href="#Contact" className='text-decoration-none' >
                                                <i class="fa-solid fa-arrow-right ms-2 "></i></a>
                                        </div>
                                    </div>
                                    <div className='CVBtnHere'>
                                        <button type="button" className=' CVBtns ms-md-5 text-uppercase' id='CVBtns'> <a href={Resume} className='text-decoration-none resumeBtn' target='_blank' rel="noreferrer"><span>Download my cv</span></a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
