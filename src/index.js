import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/Global-Styles.css';
import { Home } from './Templates/Home/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);