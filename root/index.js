import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RecoveryPage from './routes/RecoveryPage.jsx';
import CloudPage from './routes/CloudPage.jsx';
import ContactPage from './routes/ContactPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recovery' element={<RecoveryPage />} />
      <Route path='/cloud' element={<CloudPage/>} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);
