import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { CounterProvider } from './stores/Counter';

const rootElement = createRoot(document.getElementById('root'));
rootElement.render(
  <React.StrictMode>
    <CounterProvider initialValue={0}>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
