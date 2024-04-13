import React from 'react';
import ReactDom from 'react-dom/client';

const h1 = React.createElement(
    'h1',
    { className: 'title', key: 'h1' },
    'h1 heading'
);
const h2 = React.createElement(
    'h2',
    { className: 'title', key: 'h2' },
    'h2 heading'
);
const h3 = React.createElement(
    'h3',
    { className: 'title', key: 'h3' },
    'h3 heading'
);

const container = React.createElement('div', { id: 'container' }, [h1, h2, h3]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(container);
