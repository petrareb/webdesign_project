import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReactDom from 'react-dom';
import { App } from './App.jsx';

require.context('../public/', true);
//
// ReactDom.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('app-root'));


ReactDom.render(
        <App />,
    document.getElementById('app-root')
);
