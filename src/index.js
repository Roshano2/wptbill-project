import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Myprovider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myprovider>
      <App />
    </Myprovider>
  </React.StrictMode>
);

