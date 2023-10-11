import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');
const rootElement = root ? ReactDOM.createRoot(root) : null;
rootElement?.render(<App />);
