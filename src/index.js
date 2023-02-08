import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Global } from '@emotion/react';
import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Global styles={GlobalStyles}></Global>
    <App />
  </React.StrictMode>
);