import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo from 'react-demo';

ReactDOM.render(
    <React.StrictMode>
        <Demo data={{ text: 'hello world!!' }} />
    </React.StrictMode>,
    document.getElementById('root')
);
