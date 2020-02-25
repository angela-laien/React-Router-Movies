import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; /* added */

ReactDOM.render(
//Part 1.1 - Wrap your app with the router.
    <Router>
        <App />
    </Router>
, document.getElementById('root'));
