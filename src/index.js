import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import CanvasJs from "./components/canvas/Canvas"
import './index.css';

ReactDOM.render(
    <Router>
    <CanvasJs />
    </Router>,
     document.getElementById('root')
);
