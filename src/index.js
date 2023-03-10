import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import contacts from './initialContacts.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App initialContacts={contacts} />
  </React.StrictMode>
);
