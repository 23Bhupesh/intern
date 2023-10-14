import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar'
import CopyRight from './components/CopyRight';
import FooterUp from './components/FooterUp';
import PatientDetails from './components/PatientDetails';
import BasicDetails from './components/BasicDetails';
import RecentBookings from './components/RecentBookings';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <PatientDetails />
    <div className='flex gap-6'>
    <BasicDetails />
    <RecentBookings />
    </div>
    <FooterUp />
    <CopyRight />
  </React.StrictMode>
);

