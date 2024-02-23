import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Analytics from './Analytics';
import Posts from './Posts';
import Settings from './Settings';
import Profiles from './Profiles';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Profiles" element={<Profiles />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Settings" element={<Settings />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
