import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App';
// import './api/client';
const MOUNT_NODE = document.getElementById('root');

render(<App />, MOUNT_NODE);

if (module.hot) {
  module.hot.accept(['./App'], () => {
    unmountComponentAtNode(MOUNT_NODE as Element);
    const NextApp = require('./App').default;
    render(<NextApp />, MOUNT_NODE);
  });
}
