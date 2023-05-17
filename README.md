# A Brief introduction to React Context

In React, passing props is a fundamental concept that enables a parent component to share data with its child components as well as other components within an application.

In many cases, passing props can be an effective way to share data between different parts of your application. But passing props down a chain of multiple components to reach a specific component can make your code overly cumbersome.

Prop drilling can make your code more difficult to read and maintain, and can also make it harder to refactor your components later on.

-   The concept of React-Context prevents prop-drilling in Applications

This is where the Context API comes in. With Context API, you can store data at the top level of the component tree and make it available to all other components that need it without passing props.

Basically, Context API consists of two main components: the `context provider` and the `context consumer`.

The provider is responsible for creating and managing the context, which holds the data to be shared between components.

The consumer is used to access the context and its data from within a component.
