import React from 'react';
import ReactDom from 'react-dom/client';

const Para = () => (
    <div>
        <h2>Heading</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            voluptatum quibusdam est. Saepe et consectetur atque neque vel
            mollitia nulla obcaecati temporibus, placeat facilis ex magnam ut
            quidem rem tempora?
        </p>
    </div>
);

const Container = () => (
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

        <Para />
    </div>
);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Container />);
