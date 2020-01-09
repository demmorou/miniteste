import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Provider Pattern to connect the application 
import { Provider } from 'react-redux';
import Store from './store';

ReactDOM.render(
    <Provider store={Store}>
        {/* Enables the Store to be accessible to all components below it */}
        <App />
    </Provider>
    , document.getElementById('root')
);
