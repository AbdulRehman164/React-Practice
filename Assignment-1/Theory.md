# Theory

## What is Emmet?

Emmet is a web developer toolkit which makes writing html and css easy. It basically takes abbreviation and converts that abbreviation to valid html or css. It also provides infamous dummy text lorem ipsum.

## Difference between a Library and Framework?

Both frameworks and libraries are pre-written code but frameworks are the whole package, they provide almost everything needed to develop a full fledged application and libraries on the other hand focus on specific funcitonalities. React is a library.

## What is CDN? Why do we use it?

Content Delivery Network (CDN) is network of servers on which website's data such as html, javascript, stylesheets, images or videos are distributed - near the end users. When user needs that data instead of getting it from website server they get it from CDN which is near to them and it makes website fast. We use CDN to access data of a particular server.

## Why is React known as React?

React is called React because it reacts to the changes instantly. It does this by using virtual DOM and updates the only parts that are necessary.

## What is crossorigin in script tag?

Crossorigin in the script tag set the method of the request to cross-origin request (CORS). CORS is a mechanism which handles the requests made by the domain other than the websites's own.

## What is diference between React and ReactDOM

React is the core library. It is entery point into the react ecosystem while ReactDOM is only concerned with the react runned on browser which deals with DOM.

## What is difference between react.development.js and react.production.js files via CDN?

react.development.js provides the cdn which is for developmental purposes it is not minified and its size is larger than the production cdn. react.production.js provides minified cdn for production.

## What is async and defer?

When fetching data in the script tag there are three scenarios.

1. Simple script tag.
2. Script tag with async
3. Script tag with defer

### Simple script tag

When we use simple script tag the html parsing is paused data is fetched, executed and then the parsing is continued.

### Script tag with async

When we use script tag with async data is fetehed asynchronously with the html parsing then html parsing is paused, data is executed and then html parsing is continued.

### Script tag with defer

When we use script tag with defer data is fetehed asynchronously but the html parsing is not paused it completes and after its completion data is executed.
