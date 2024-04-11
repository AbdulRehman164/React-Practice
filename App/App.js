import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    'h1',
    {
        id: 'main-heading',
        style: { fontFamily: 'monospace' },
    },
    'Hello React!'
);

const heading2 = React.createElement(
    'h2',
    {
        id: 'main-heading2',
        style: { fontFamily: 'monospace' },
    },
    'Hello React!'
);

const container = React.createElement('div', {}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
