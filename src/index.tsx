import React from 'react';
import ReactDOM from 'react-dom';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import App from './App';

const gridTheme = {
    breakpoints: {
        lg: 1440,
        md: 768,
        sm: 420,
    },
    container: {
        padding: 0,
    },
};

const styledTheme = {
    pointColor: '#E50914;',
};

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={ styledTheme }>
            <GridThemeProvider gridTheme={ gridTheme }>
                <App />
            </GridThemeProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
