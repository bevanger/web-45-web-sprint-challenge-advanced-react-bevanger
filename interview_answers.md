# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

    A stateful component is a component that holds some state while a functional component does not have state or lifecycle methods. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?

    A componentWillMount function is called when initializing a component. It is called before the render method is executed. A componentWillUpdated function is called right before the component renders.

3. Define stateful logic.

    Stateful logic is any code that is used to manipulate data and create state.

4. What are the three step of creating a successful test? What is done in each phase?

    The three steps are arrange, act, and assert. In arrange we setup the react component that we are testing. In act we execute the behavior if there is one. And in assert you extract the response element and if needed check that it is what we expect it to be. 
