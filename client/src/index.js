
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { store } from './store/store';
import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
