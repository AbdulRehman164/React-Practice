import React from 'react';
import ReactDom from 'react-dom/client';

const container = (
    <div id="container">
        <h1 className="title" key="h1">
            h1 heading
        </h1>
        <h2 className="title" key="h2">
            h2 heading
        </h2>
        <h3 className="title" key="h3">
            h3 heading
        </h3>
    </div>
);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(container);
