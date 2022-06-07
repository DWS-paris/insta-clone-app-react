/* 
  [IMPORT] React.js
  Define main imports to generate React App
*/
  // Imports React
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import reportWebVitals from './reportWebVitals';

  // Add React module to set App router
  import { BrowserRouter } from 'react-router-dom'

  // App component
  import App from './App';

  // App root React object
  const root = ReactDOM.createRoot(document.getElementById('root'));
//

/* 
  [RENDER] App
  Launch React app
*/
  root.render(
    <React.StrictMode>
      {/* Use the BrowserRouter directive to add App router */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
//

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
