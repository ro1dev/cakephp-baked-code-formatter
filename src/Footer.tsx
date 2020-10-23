import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tool from './img/tool.png';

const Footer = () => {
    return <React.Fragment>
        <footer className="text-center mb-2">
        <a href="https://github.com/rrih/cakephp-baked-code-formatter/" className="text-decoration-none">
            GitHub
        </a>
        </footer>
    </React.Fragment>
}

export default Footer;