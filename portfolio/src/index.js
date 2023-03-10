import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global-styles/styles.css';
import App from '../src/templates/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
