import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './Components/App.jsx';
import 'typeface-roboto';
import './styles.css';

function Index() {
    return (
        <>
            <CssBaseline />
            <App />
        </>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Index />, rootElement);
