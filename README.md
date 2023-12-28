# learn-javascript
I'm challenging myself to learn JavaScript in 30 Days from Scratch. Ill be uploading the resources here and my thoughts on the same
## Day 0
- ## Javascript Basics
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

 - ## [Variables](1-variables.html)
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
        ### [Exercise 1](01-cart.html)
        Create a [Cart Quantity tracker](https://supersimple.dev/projects/variables/)
        1. Start with an empty cart.
        2. Add items to the cart (+1).
        3. Increment by 2.
        4. Increment by 3.
        5. Reset Cart.
## Day 1
- ## [Booleans](02-booleans.html)
   - Booleans are `true` or  `false` values.
   - They are used in conditional statements like If Else Statements.
     - `==` - equals to
     - `!=` - not equal to
     - `===` - Checks for equality in both logic and datatype
     - `>=` - greater than or equal to
     - `<=` - less than or equal to
   - Logical operators `&&` AND `||` OR `!` NOT.
   - if Else statements
   - Falsy Values
     - false
     - 0
     - null
     - undefined
     - '' (empty string)
     - NaN (Not a number)
     
     ### [Exercise 2](02-rock-paper-scissors.html)
     Implement [Rock Paper Scissors game](https://supersimple.dev/projects/rock-paper-scissors/).
     1. Prompt user to choose either rock, paper, or scissors.
     2. Generate computer's choice randomly. `Math.random()`
     3. Compare the two choices.
        - If they are the same print draw.
        - If one wins over the other print winner.
        - If none win print tie.
## Day 2
- ## [Functions](03-functions.html)
     - Functions allow you to package code so that it can be reused throughout your program.
     - Syntax: `function function_name(parameter1, parameter2){}`
     - Parameter list `( )` is optional if there are no parameters.
     - To call a function use its name followed by parentheses `()`.
     - The value returned from a function is stored in a special variable called `return`.
     - Functions can also return nothing by leaving out the `return` statement entirely. This returns `undefined`, which is treated as `false` in
     - A function can return anything including objects, arrays, strings, numbers etc.
     - If nothing is returned then JavaScript returns `undefined`.
     - Global scope is where all variables exist unless declared otherwise using `var`, `let`, or `const`.
     - Local scope is created when a function is executed. It exists only while the function is being run.
     ### [Exercise 3](03-rock-paper-scissors.html)
     Make [the Rock Paper Scissors game](02-rock-paper-scissors.html) more cleaner using fuctions
     1. Wrap the prompts into a separate function.
     2. Use arrow functions which have shorter syntax.
## Day 3
 - ## [Objects](04-objects.html)
     - An object is a collection of key value pairs.
     - Syntax:
          -  `const objectName = {
               propertyName : "value",
               anotherProperty : "anotherValue",
               };`
     - You can access properties with dot notation `.`
          - `console.log(objectName.propertyName);`
     - Or bracket notation `[ ]`
          - `console.log(objectName["propertyName"]); // Same as above.`
     - Objects are dynamic meaning new properties can be added at any time.
     - Methods are just like properties but instead of holding values they hold functions.
     - Why we use Objects
          1. Store related data together.
          2. Group functionality together.
          3. Makes code easier to read and manage.
     ### [Exercise 4](04-rock-paper-scissors.html)
     Add a score tracker to the [Rock Paper scissors game](03-rock-paper-scissors.html)
     1. Create an object named `score` with properties for both player and computer scores.
     2. Whenever someone wins update their respective score.
     3. Create a `Reset score` button that resets all scores to `0`.
  - #### LocalStorage & sessionStorage
     - Web storage API provides a way to store data on the client side.
     - There are two types of web storage `localStorage` and `sessionStorage`.
     - `localStorage` stores data even after closing browser tab/window.
     - `sessionStorage` will remove data once closed.
     - Both work in similar fashion except data persists longer.
 - ## [Document Object Model](05-dom.html) (DOM)
     - Document Object Model allows us to interact with HTML elements in our webpage.
     - Every element on a page is represented by an object in the DOM.
     - We can manipulate these objects to change how a webpage looks and behaves.
     - Example manipulating paragraph text color:

     ### [Exercise 5](/05-amazon-calc/)
     Build an [Amazon Calculator Project](https://supersimple.dev/projects/dom-with-css/)
     - Ask for Cost Value. 
       - Orders under $40 = +$10 shipping.
       - Orders over $40 = FREE shipping.
     - Print out the Total Cost after Shipping fees added
      
## Day 4
 - ## [Arrays](06-arrays.html)
     - Arrays are ordered collections of items.
     - They can contain different types of data such as numbers, strings, objects, arrays etc.
     - Array methods allow you to perform operations on arrays.
     - Syntax for arrays
          - `const arrayName = [value1, value2, value3];`
     - Accessing array elements
          * Using brackets `arrayName[index]`
          * Dot Notation `arrayName.index`
          
     - Examples include `push()`, `pop()`, `shift()`, `unshift()`.
          * `push()` adds one or many items to the end of array.
          * `pop()` removes item from the end of array.
          * `shift()` removes first item in array.
          * `unshift()` adds one or many items to beginning of array.
     - Array method chaining is when you call multiple methods one right after the other.
     ### [Exercise 6](/06-to-do-list/)
     Create a [To Do List](https://supersimple.dev/projects/arrays/)
     1. Create an array to store todos.
     2. Prompt user to enter todo.
     3. User should be able to add new todos.
 - ## [Loops](07-loops.html)
     - Loops allow us to repeat actions a set number of times.
     

     