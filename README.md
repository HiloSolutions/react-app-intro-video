# About this project
This repository goes alongside my tutorial series for React Basics.

# Video 1: Setting up a react project

[Click here to watch my YouTube video](https://youtu.be/UOIvmHOS188)

Think of your React app as a toolbox that you fill with ready-to-use components 
which can easily get dropped onto your web page. Just like how you put together pieces of a puzzle, you can combine components to create a complete and functional web application.

To start, you'll have an index file that acts as the main starting point of your web application. Inside the index file, you'll render one main component, the App component which is the central part of your web page. It takes up the entire screen and holds all the other components together while keeping them organized.

When you run your React app, React works behind the scenes to calculate the minimum changes required to refresh the page. This is what makes your website fast and responsive.

In the upcoming video we will dive deeper into the index and App components
Specifically, I explain how to:
* Install react app
* Set up Index.js
* Set up App.js
* Nest components


# Video 2: Passing Props
[Click here to watch my YouTube video](https://youtu.be/TSryvbZTGfQ)

Props are the information that you pass to a JSX tag. Their name is short for properties. 
You can look at this JSX element like a function that generates a UI element, and these props are the arguments you are passing into the function. In fact, props are the only argument to your component! React component functions accept a single argument, a props object.

In this video, I cover:
* Passing props to a component
* Specifying default values
* Nesting JSX components
* How props change over time


# Video 3: State Management
[Click here to watch my YouTube video](https://youtu.be/Yrz5JDzM5Fg)

The key difference between state and props is that Props are used for passing data from a parent component to its child components, while state is used for managing internal component data that can change over time.

As an example, Imagine you have a jar of candy and you can add candy into it or take candy out of it whenever you want. To keep track of how much candy you have, you decide to build an app. This jar is like the component and its state is how full it is.  The count of candies inside your jar component will increase as you add candy in and  decrease as you take them out. 

In this way, State helps you keep track of important information in your app, like how many candies you have or what your favorite color is.

For example, if you have five candies in your jar and you eat one, you need your app to update your candy count to four. The React state will help you do that! Likewise, say you go to the store and buy ten more candies to add to your jar. When they are added, you will also need your state to update.

So as I go through this lesson, remember that React state is like your candy jar where you store and manage important information like how many candies you have. It helps you make cool things happen and create dynamic games and apps!



# Video 4: useEffect for asynchronous functionality
[Click here to watch my YouTube video](https://youtu.be/70vVdcFBXq4)
Effects serve as an "escape hatch" when you need to step outside of React's direct control in your components. One common use case for useEffect is handling asynchronous requests like state updates, synchronizing external systems, data fetching, API calls, etc.

In this tutorial, we will make a stopwatch and Ill cover some important concepts like:
* cleanup functions
* dependency arrays
* memory leaks
* implications of react’s double render in development mode 


# Video 5: useRef vs. useState for remembering variables accross renders
[Click here to watch my YouTube video](https://youtu.be/KEPgbATM2iQ)

useRef is a versatile hook in React. Ultimately, it is great for When you want a component to “remember” information, but you don’t want that information to trigger new renders. 
This is because, using the user hook returns a plain javascript object. Whenever you mutate the object to hold a new current value, useRef will return the same object back. Thus, no re-render is triggered.

In this video, we will go over:
* How to implement useref
* How useRef works
* Accessing DOM elements with a scroll example


# Video 6: Folder structure best practices

