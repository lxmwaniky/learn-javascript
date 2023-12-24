# learn-javascript
I'm challenging myself to learn JavaScript in 30 Days from Scratch. Ill be uploading the resources here and my thoughts on the same
## Day 0
 - Javascript Basics
   - Data types
        - Boolean   : `true` or `false`
        - String    : `'Hello World'`
        - Number    : `42`, `-9.3`
   - Math Functions and Operators
        - Arithmetic: `+, - , * /`
   - Uses
        - `console.log('Print Something Here')`
        - `<button onclick="Action">Click Me</button>`
        - `alert('Message Pop up')`

 - [Variables and Data Types](1-variables.html)
   - Variable Naming Conventions
        - Use meaningful names for variables
        - Avoid using reserved words as variable names (`var if = false;`)
        - Declare your variables with the appropriate data type (`let` or `const`). Constants should be used when you know that a value will
        - Declare your variables with the appropriate data type (e.g., `let name = "John";`)
        - You can declare multiple variables in one line by separating them with commas (`let x=1, y=2;`).
        - JavaScript is case sensitive (`VarNameIsDifferentFrom varnameisdifferentfrom`).
    - **Let** and **Const**
        - Let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
        - Const lets you declare a variable that is constant and its value cannot be reassigned once it's set.
        ### [Exercise 1](1-cart.html)
        Create a [Cart Quantity tracker](https://supersimple.dev/projects/variables/)
        1. Start with an empty cart.
        2. Add items to the cart (+1).
        3. Increment by 2.
        4. Increment by 3.
        5. Reset Cart.
        