import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './context/Context';


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// This project is one of the many that I have been using to learn MERN stack and develop my skills. A huge thanks to Safak Kocaoglu for the help,
// inspiration and selflessly sharing his knowledge and understanding of the MERN stack and React. Thank you.
