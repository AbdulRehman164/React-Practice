# Theory

## What is JSX?

JSX is syntactic sugar for React.CreateElement and its other methods. It allows us to write HTML in JS. Its syntax is like HTML but It is not HTML. It is not entirely like HTML there are cetain differences between them. JSX is converted to React methods through transpiler like babel.

## Superpowers of JSX

-   Allows us to write HTML in JS
-   Make the code more readable
-   Reduce the length of code
-   Make writing components easy

## Role of type attribute in script tag? What options can I use there?

-   importmap (script with type importmap contains a json object specifying keywords for importing)
-   module (the script is of type es6 module)
-   speculationrules

## {TitleComponent} vs {&lt;TitleComponent/&gt;} vs {&lt;TitleComponent&gt;&lt;/TitleComponent&gt;} in JSX

### {TitleComponent}

Gives the component as a function without calling it.

### {&lt;TitleComponent/&gt;}

Calls the Component and the value returned by the component is rendered.

### {&lt;TitleComponent&gt;&lt;/TitleComponent&gt;}

Create a React element with type titleComponent
