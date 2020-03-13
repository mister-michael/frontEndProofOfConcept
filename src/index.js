import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import AppViews from './components/AppViews';

ReactDOM.render(
    <Router>
    <AppViews />
    </Router>,
     document.getElementById('root')
);
