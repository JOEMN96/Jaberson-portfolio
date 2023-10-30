import React from 'react';
import './Header.scss';
import MainLogo from '../Image/Mianlogo/HomeMainLogo.png';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

export default function Header({ isDark, setIsDark }) {
  const toggleBtnChange = (target) => {
    setIsDark(target.checked);
    window.localStorage.setItem('theme', target.checked ? 'dark' : 'light');
  };

  return (
    <div className="mainHeader">
      <nav className="navbar navbar-expand-md p-0">
        <div className="container-fluid header" id="leftRightPadding">
          <a className="navbar-brand" href="#Home">
            <img src={MainLogo} id="MainLogo" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            id="menuIcon"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" id="menuIcons"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex">
              <li className="nav-item" href="#AboutMe">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#About"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mySkills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
            <Toggle
              checked={isDark}
              onChange={({ target }) => toggleBtnChange(target)}
              icons={{ checked: '🌙', unchecked: '🔆' }}
              aria-label="Dark mode toggle"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
