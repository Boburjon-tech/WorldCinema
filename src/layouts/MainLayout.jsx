import darkModeIcon from './dark_mode.png';
import lightModeIcon from './light_mode.png';

import "./mainLayout.css";
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useState } from 'react';
import { useDarkMode } from "../context/darkModeContext"; 

function MainLayout() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className={`site_main_div ${darkMode ? "dark" : ""}`}>
      <Navbar />

      <main className="main__content">
        <Outlet />

        <div className="darkmode__btn_div">
          <button onClick={() => setDarkMode(!darkMode)}>
            <img src={darkMode ? darkModeIcon : lightModeIcon} alt="" />
          </button>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
