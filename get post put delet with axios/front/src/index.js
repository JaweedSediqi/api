import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstarp/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import { SnackbarProvider } from 'notistack'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SnackbarProvider>
);
