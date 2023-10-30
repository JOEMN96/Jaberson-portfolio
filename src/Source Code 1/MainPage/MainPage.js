import React, { useState } from 'react';
import './MainPage.scss';
import Header from '../Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from '../Footer/Footer';
import AppSkills from './Applications/AppSkills';
import { useEffect } from 'react';

export default function MainPage1() {
  const [themes, setthemes] = useState('');
  const [isDark, setIsDark] = useState(null);

  let prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    let darkModeToggled = window.localStorage.getItem('theme');
    if (!darkModeToggled) {
      window.localStorage.setItem('theme', 'light');
    } else {
      setIsDark(window.localStorage.getItem('theme') == 'dark' ? true : false);
    }

    if (prefersDark) {
      setIsDark(true);
    }
  }, []);

  return (
    <div>
      <div className={'mainPage ' + (isDark ? 'dark-mode ' : '')} id={themes}>
        <div className="Header">
          <Header setIsDark={setIsDark} isDark={isDark} />
        </div>
        <div className="Home p-3">
          <Home />
        </div>
        <div className="About p-3">
          <About />
        </div>
        <div className="Skills p-3">
          <Skills />
        </div>
        <div className="Appskills">
          <AppSkills />
        </div>

        <div className="Portfolio p-3">
          <Portfolio />
        </div>
        <div className="Contact p-3">
          <Contact />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
