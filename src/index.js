import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Widget from './Widget';

const root = document.createElement('DIV');
document.body.appendChild(root);

ReactDOM.render(
  <React.StrictMode>
    <Widget />
  </React.StrictMode>,
  root
);
