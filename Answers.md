# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a JavaScript library that was created by Facebook to handle complex state management. It does so by allowing a web application to be broken down into components that have the ability to hold 'state' if needed. This state can be passed around only where it is needed and updated through set state calls.

2.  What does it mean to _think_ in react?

To think in react is to take something large and to break it down into smaller components. If you try to create Instagram by tackling the entire thing at once, it would be impossible. By looking at each component and what each component is meant to do, simplifies the programming process in React. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class/Stateful components are ES6 classes. Functional components are, quite literally, functions. Functional components are generally better to work with, as they are easier to read, write, and debug.

4.  Describe state.

State is the heart of an React app in that is a property of a class component which is usually an object that contains our data. State is usually set in ones constructor function and is updated through using this.setState() methid. Without this method, it is immutable.

5.  Describe props.

"Props", or "properties", are literal variable representatives of data properties. They are static and do not change, and are used to link states within an application's lifecycle.