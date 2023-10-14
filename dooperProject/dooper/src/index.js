import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar'
import CopyRight from './components/CopyRight';
import FooterUp from './components/FooterUp';
import MainContent from './components/MainContent';
import FamilyMemberText from './components/FamilyMemberText';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <MainContent />
    <FamilyMemberText />
    <FooterUp />
    <CopyRight />
  </React.StrictMode>
);

