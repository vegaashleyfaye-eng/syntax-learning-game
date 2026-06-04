export const codeChallenges = {
    beginner: [
        {
            title: "Complete the Variable Declaration",
            description: "Fill in the missing part to declare a variable",
            code: "_____ name = 'John';",
            answer: "var",
            hint: "It's a keyword that starts with 'v'",
            explanation: "var is used to declare variables in JavaScript"
        },
        {
            title: "Complete the Function",
            description: "Fill in the missing keyword",
            code: "_____ greet() { return 'Hello'; }",
            answer: "function",
            hint: "It's 8 letters long",
            explanation: "function keyword is used to declare functions"
        },
        {
            title: "Complete the Array Access",
            description: "Fill in the missing brackets",
            code: "const first = myArray_____0_____",
            answer: "[]",
            hint: "Use square brackets",
            explanation: "Square brackets are used to access array elements"
        },
        {
            title: "Complete the Comparison",
            description: "Fill in the missing operator",
            code: "if (x _____ y) { }",
            answer: "===",
            hint: "Three equal signs for strict comparison",
            explanation: "=== checks for strict equality"
        },
        {
            title: "Complete the Object",
            description: "Fill in the missing brackets",
            code: "const obj = _____ name: 'John' _____",
            answer: "{}",
            hint: "Use curly braces",
            explanation: "Curly braces are used for object literals"
        }
    ],
    intermediate: [
        {
            title: "Complete the Arrow Function",
            description: "Fill in the missing operator",
            code: "const add = (a, b) _____ a + b;",
            answer: "=>",
            hint: "It's an arrow",
            explanation: "=> is used in arrow function syntax"
        },
        {
            title: "Complete the Try-Catch",
            description: "Fill in the missing keyword",
            code: "try { } _____ (e) { }",
            answer: "catch",
            hint: "It's 5 letters",
            explanation: "catch keyword handles errors"
        },
        {
            title: "Complete the Spread Operator",
            description: "Fill in the missing dots",
            code: "const newArr = [_____oldArr];",
            answer: "...",
            hint: "Three dots",
            explanation: "... is the spread operator"
        },
        {
            title: "Complete the Destructuring",
            description: "Fill in the missing brackets",
            code: "const _____ name, age _____ = person;",
            answer: "{}",
            hint: "Use curly braces",
            explanation: "Curly braces are used for object destructuring"
        },
        {
            title: "Complete the Promise",
            description: "Fill in the missing keyword",
            code: "_____ Promise((resolve, reject) => { })",
            answer: "new",
            hint: "It's 3 letters",
            explanation: "new keyword creates a new Promise instance"
        }
    ],
    advanced: [
        {
            title: "Complete the Class",
            description: "Fill in the missing keyword",
            code: "_____ Person { constructor(name) { this.name = name; } }",
            answer: "class",
            hint: "It's 5 letters",
            explanation: "class keyword defines a class"
        },
        {
            title: "Complete the Inheritance",
            description: "Fill in the missing keyword",
            code: "class Dog _____ Animal { }",
            answer: "extends",
            hint: "It's 7 letters",
            explanation: "extends keyword creates inheritance"
        },
        {
            title: "Complete the Async Generator",
            description: "Fill in the missing symbols",
            code: "async function_____ getData() { }",
            answer: "*",
            hint: "It's an asterisk",
            explanation: "* makes a function a generator"
        },
        {
            title: "Complete the Proxy",
            description: "Fill in the missing keyword",
            code: "_____ Proxy(target, handler)",
            answer: "new",
            hint: "It's 3 letters",
            explanation: "new keyword creates a new Proxy instance"
        },
        {
            title: "Complete the Optional Chaining",
            description: "Fill in the missing operator",
            code: "const value = obj_____prop_____nested;",
            answer: "?.",
            hint: "Question mark and dot",
            explanation: "?. is the optional chaining operator"
        }
    ]
};

export const gameData = {
    beginner: [
        {
            question: "How do you declare a variable in JavaScript?",
            description: "Choose the correct way to declare a variable",
            learningTip: "JavaScript has three ways to declare variables: var, let, and const",
            options: [
                { text: "var name = 'John';", correct: true, feedback: "Correct! var is one way to declare variables." },
                { text: "variable name = 'John';", correct: false, feedback: "Incorrect. 'variable' is not a keyword." },
                { text: "name = 'John';", correct: false, feedback: "This works but doesn't explicitly declare the variable." },
                { text: "declare name = 'John';", correct: false, feedback: "Incorrect. 'declare' is not a JavaScript keyword." }
            ],
            hint: "Look for JavaScript keywords like var, let, or const"
        },
        {
            question: "What is the correct syntax for a function?",
            description: "Select the proper function declaration",
            learningTip: "Functions are reusable blocks of code that perform specific tasks",
            options: [
                { text: "function myFunc() { }", correct: true, feedback: "Correct! This is the standard function declaration." },
                { text: "func myFunc() { }", correct: false, feedback: "Incorrect. Use 'function', not 'func'." },
                { text: "def myFunc() { }", correct: false, feedback: "That's Python syntax, not JavaScript." },
                { text: "function: myFunc() { }", correct: false, feedback: "Incorrect syntax for function declaration." }
            ],
            hint: "The keyword starts with 'f' and has 8 letters"
        },
        {
            question: "How do you write a comment in JavaScript?",
            description: "Choose the correct comment syntax",
            learningTip: "Comments help explain your code and are ignored by the browser",
            options: [
                { text: "// This is a comment", correct: true, feedback: "Correct! // creates a single-line comment." },
                { text: "# This is a comment", correct: false, feedback: "That's Python syntax." },
                { text: "<!-- This is a comment -->", correct: false, feedback: "That's HTML syntax." },
                { text: "' This is a comment", correct: false, feedback: "Incorrect. Single quotes don't create comments." }
            ],
            hint: "It uses two forward slashes"
        },
        {
            question: "What is the correct way to access an array element?",
            description: "Select the proper array indexing syntax",
            learningTip: "Arrays are zero-indexed, meaning the first element is at index 0",
            options: [
                { text: "myArray[0]", correct: true, feedback: "Correct! Arrays use square brackets with an index." },
                { text: "myArray(0)", correct: false, feedback: "Parentheses are for function calls, not array access." },
                { text: "myArray.0", correct: false, feedback: "Incorrect. Use square brackets, not a dot." },
                { text: "myArray{0}", correct: false, feedback: "Curly braces are for objects, not arrays." }
            ],
            hint: "Use square brackets with a number inside"
        },
        {
            question: "How do you check if a value is equal in JavaScript?",
            description: "Choose the correct equality operator",
            learningTip: "Use == for loose equality or === for strict equality (recommended)",
            options: [
                { text: "if (x === y)", correct: true, feedback: "Correct! === checks for strict equality." },
                { text: "if (x = y)", correct: false, feedback: "That's assignment, not comparison." },
                { text: "if (x == y)", correct: false, feedback: "This works but === is more reliable." },
                { text: "if (x <> y)", correct: false, feedback: "Incorrect operator." }
            ],
            hint: "It uses three equal signs for strict comparison"
        },
        {
            question: "What is the correct syntax for an if statement?",
            description: "Select the proper if statement syntax",
            learningTip: "If statements execute code only when a condition is true",
            options: [
                { text: "if (condition) { }", correct: true, feedback: "Correct! This is the standard if syntax." },
                { text: "if condition { }", correct: false, feedback: "Parentheses are required around the condition." },
                { text: "if (condition)", correct: false, feedback: "Curly braces are needed for the code block." },
                { text: "if: (condition) { }", correct: false, feedback: "Incorrect syntax." }
            ],
            hint: "Condition goes in parentheses, code in curly braces"
        },
        {
            question: "How do you create an object in JavaScript?",
            description: "Choose the correct object literal syntax",
            learningTip: "Objects store data as key-value pairs inside curly braces",
            options: [
                { text: "const obj = { name: 'John' };", correct: true, feedback: "Correct! This is object literal syntax." },
                { text: "const obj = [ name: 'John' ];", correct: false, feedback: "Square brackets are for arrays." },
                { text: "const obj = ( name: 'John' );", correct: false, feedback: "Parentheses are for grouping, not objects." },
                { text: "const obj = < name: 'John' >;", correct: false, feedback: "Angle brackets are for JSX, not objects." }
            ],
            hint: "Objects use curly braces with key-value pairs"
        },
        {
            question: "What does console.log() do?",
            description: "Select the correct description",
            learningTip: "console.log() is used to print output to the browser console",
            options: [
                { text: "Prints output to the console", correct: true, feedback: "Correct! It displays values in the developer console." },
                { text: "Logs into a file", correct: false, feedback: "It prints to the console, not a file." },
                { text: "Creates a new variable", correct: false, feedback: "It's for output, not variable creation." },
                { text: "Ends the program", correct: false, feedback: "It just prints output." }
            ],
            hint: "It's used for debugging and displaying values"
        },
        {
            question: "How do you declare a constant in JavaScript?",
            description: "Choose the correct constant declaration",
            learningTip: "const creates a variable that cannot be reassigned",
            options: [
                { text: "const PI = 3.14;", correct: true, feedback: "Correct! const declares a constant value." },
                { text: "constant PI = 3.14;", correct: false, feedback: "Use 'const', not 'constant'." },
                { text: "const PI;", correct: false, feedback: "const requires an initial value." },
                { text: "const = PI = 3.14;", correct: false, feedback: "Incorrect syntax." }
            ],
            hint: "It's a short keyword that starts with 'c'"
        },
        {
            question: "What is the correct syntax for a for loop?",
            description: "Select the proper for loop syntax",
            learningTip: "For loops repeat code a specific number of times",
            options: [
                { text: "for (let i = 0; i < 10; i++) { }", correct: true, feedback: "Correct! This is the standard for loop." },
                { text: "for i = 0 to 10 { }", correct: false, feedback: "That's not JavaScript syntax." },
                { text: "for (i = 0; i < 10) { }", correct: false, feedback: "Missing the increment part (i++)." },
                { text: "loop (i = 0; i < 10; i++) { }", correct: false, feedback: "Use 'for', not 'loop'." }
            ],
            hint: "It has three parts separated by semicolons"
        }
    ],
    intermediate: [
        {
            question: "What is the correct syntax for an arrow function?",
            description: "Choose the correct arrow function syntax",
            learningTip: "Arrow functions are a concise way to write functions using =>",
            options: [
                { text: "const add = (a, b) => a + b;", correct: true, feedback: "Correct! This is arrow function syntax." },
                { text: "const add = (a, b) -> a + b;", correct: false, feedback: "Use =>, not ->" },
                { text: "const add => (a, b) { return a + b; }", correct: false, feedback: "Incorrect placement of =>." },
                { text: "const add = function(a, b) => a + b;", correct: false, feedback: "Don't mix function and arrow syntax." }
            ],
            hint: "Uses => to define the function body"
        },
        {
            question: "How do you handle errors in JavaScript?",
            description: "Select the correct error handling syntax",
            learningTip: "Try-catch blocks help handle errors gracefully",
            options: [
                { text: "try { } catch (e) { }", correct: true, feedback: "Correct! Try-catch is the standard error handling." },
                { text: "try { } except (e) { }", correct: false, feedback: "That's Python syntax." },
                { text: "try { } error (e) { }", correct: false, feedback: "Use 'catch', not 'error'." },
                { text: "catch { } try (e) { }", correct: false, feedback: "Try comes before catch." }
            ],
            hint: "It uses 'try' and 'catch' keywords"
        },
        {
            question: "What is the correct way to use the spread operator?",
            description: "Choose the correct spread operator usage",
            learningTip: "The spread operator (...) expands arrays or objects",
            options: [
                { text: "const newArr = [...oldArr];", correct: true, feedback: "Correct! ... spreads array elements." },
                { text: "const newArr = [..oldArr];", correct: false, feedback: "Use three dots, not two." },
                { text: "const newArr = [*oldArr];", correct: false, feedback: "Use ..., not *" },
                { text: "const newArr = [>>oldArr];", correct: false, feedback: "Incorrect operator." }
            ],
            hint: "It uses three dots (...)"
        },
        {
            question: "How do you destructure an object?",
            description: "Select the correct destructuring syntax",
            learningTip: "Destructuring extracts values from objects into variables",
            options: [
                { text: "const { name, age } = person;", correct: true, feedback: "Correct! This is object destructuring." },
                { text: "const [name, age] = person;", correct: false, feedback: "Square brackets are for array destructuring." },
                { text: "const { name, age } = [person];", correct: false, feedback: "Use an object, not an array." },
                { text: "const name, age = person;", correct: false, feedback: "Missing destructuring syntax." }
            ],
            hint: "Uses curly braces to extract object properties"
        },
        {
            question: "What is the correct syntax for a Promise?",
            description: "Choose the correct Promise syntax",
            learningTip: "Promises handle asynchronous operations",
            options: [
                { text: "new Promise((resolve, reject) => { })", correct: true, feedback: "Correct! This is Promise syntax." },
                { text: "new Promise(resolve, reject) { }", correct: false, feedback: "Parameters need parentheses and arrow function." },
                { text: "Promise((resolve, reject) => { })", correct: false, feedback: "Use 'new' keyword." },
                { text: "new Promise(function resolve, reject) { }", correct: false, feedback: "Use arrow function syntax." }
            ],
            hint: "Uses 'new' keyword with resolve and reject parameters"
        },
        {
            question: "How do you use async/await?",
            description: "Select the correct async/await syntax",
            learningTip: "Async/await makes asynchronous code look synchronous",
            options: [
                { text: "async function getData() { const data = await fetch(); }", correct: true, feedback: "Correct! This is async/await syntax." },
                { text: "function async getData() { const data = await fetch(); }", correct: false, feedback: "async comes before function." },
                { text: "async function getData() { const data = fetch(); }", correct: false, feedback: "Use 'await' before the async call." },
                { text: "await function getData() { const data = fetch(); }", correct: false, feedback: "await is used inside async functions." }
            ],
            hint: "async keyword before function, await before async calls"
        },
        {
            question: "What is the correct way to use map()?",
            description: "Choose the correct map() syntax",
            learningTip: "map() transforms each element in an array",
            options: [
                { text: "const doubled = arr.map(x => x * 2);", correct: true, feedback: "Correct! map() applies a function to each element." },
                { text: "const doubled = arr.map(x * 2);", correct: false, feedback: "Need an arrow function." },
                { text: "const doubled = arr.map((x) * 2);", correct: false, feedback: "Use => not just parentheses." },
                { text: "const doubled = map(arr, x => x * 2);", correct: false, feedback: "map() is a method on the array." }
            ],
            hint: "Uses arrow function to transform elements"
        },
        {
            question: "How do you use filter()?",
            description: "Select the correct filter() syntax",
            learningTip: "filter() keeps only elements that match a condition",
            options: [
                { text: "const evens = arr.filter(x => x % 2 === 0);", correct: true, feedback: "Correct! filter() returns matching elements." },
                { text: "const evens = arr.filter(x % 2 === 0);", correct: false, feedback: "Need an arrow function." },
                { text: "const evens = filter(arr, x => x % 2 === 0);", correct: false, feedback: "filter() is a method on the array." },
                { text: "const evens = arr.filter(x => x % 2);", correct: false, feedback: "Need to check === 0 for even numbers." }
            ],
            hint: "Returns a new array with filtered elements"
        },
        {
            question: "What is the correct way to use reduce()?",
            description: "Choose the correct reduce() syntax",
            learningTip: "reduce() combines array elements into a single value",
            options: [
                { text: "const sum = arr.reduce((acc, x) => acc + x, 0);", correct: true, feedback: "Correct! reduce() accumulates values." },
                { text: "const sum = arr.reduce((acc, x) => acc + x);", correct: false, feedback: "Should provide initial value (0)." },
                { text: "const sum = arr.reduce(acc + x, 0);", correct: false, feedback: "Need an arrow function." },
                { text: "const sum = reduce(arr, (acc, x) => acc + x);", correct: false, feedback: "reduce() is a method on the array." }
            ],
            hint: "Takes a callback and initial value"
        },
        {
            question: "How do you clone an object?",
            description: "Select the correct object cloning syntax",
            learningTip: "Use spread operator or Object.assign() to clone objects",
            options: [
                { text: "const clone = { ...original };", correct: true, feedback: "Correct! Spread operator creates a shallow clone." },
                { text: "const clone = original;", correct: false, feedback: "This just references the same object." },
                { text: "const clone = [original];", correct: false, feedback: "This wraps it in an array." },
                { text: "const clone = original.clone();", correct: false, feedback: "Objects don't have a clone() method." }
            ],
            hint: "Uses the spread operator (...)"
        }
    ],
    advanced: [
        {
            question: "What is the correct syntax for a class?",
            description: "Choose the correct class declaration",
            learningTip: "Classes are blueprints for creating objects with methods",
            options: [
                { text: "class Person { constructor(name) { this.name = name; } }", correct: true, feedback: "Correct! This is class syntax." },
                { text: "class Person { Person(name) { this.name = name; } }", correct: false, feedback: "Use 'constructor', not the class name." },
                { text: "class Person { init(name) { this.name = name; } }", correct: false, feedback: "Use 'constructor' for initialization." },
                { text: "class Person { function(name) { this.name = name; } }", correct: false, feedback: "Use 'constructor', not 'function'." }
            ],
            hint: "Uses 'constructor' method for initialization"
        },
        {
            question: "How do you use inheritance in JavaScript?",
            description: "Select the correct inheritance syntax",
            learningTip: "extends keyword allows a class to inherit from another",
            options: [
                { text: "class Dog extends Animal { }", correct: true, feedback: "Correct! extends creates inheritance." },
                { text: "class Dog inherits Animal { }", correct: false, feedback: "Use 'extends', not 'inherits'." },
                { text: "class Dog : Animal { }", correct: false, feedback: "Use 'extends', not ':'." },
                { text: "class Dog implements Animal { }", correct: false, feedback: "Use 'extends' for inheritance." }
            ],
            hint: "Uses the 'extends' keyword"
        },
        {
            question: "What is the correct way to use async generators?",
            description: "Choose the correct async generator syntax",
            learningTip: "Async generators combine async/await with generator functions",
            options: [
                { text: "async function* getData() { yield await fetch(); }", correct: true, feedback: "Correct! async function* creates async generator." },
                { text: "async generator getData() { yield await fetch(); }", correct: false, feedback: "Use 'function*', not 'generator'." },
                { text: "function* async getData() { yield await fetch(); }", correct: false, feedback: "async comes before function*." },
                { text: "async function getData() { yield await fetch(); }", correct: false, feedback: "Need * for generator function." }
            ],
            hint: "Combines async and function* syntax"
        },
        {
            question: "How do you use Proxy in JavaScript?",
            description: "Select the correct Proxy syntax",
            learningTip: "Proxy intercepts and customizes operations on objects",
            options: [
                { text: "new Proxy(target, handler)", correct: true, feedback: "Correct! Proxy takes target and handler." },
                { text: "new Proxy(handler, target)", correct: false, feedback: "Target comes first, then handler." },
                { text: "Proxy(target, handler)", correct: false, feedback: "Use 'new' keyword." },
                { text: "new Proxy({ target, handler })", correct: false, feedback: "Arguments are separate, not in an object." }
            ],
            hint: "Takes target object and handler object"
        },
        {
            question: "What is the correct way to use WeakMap?",
            description: "Choose the correct WeakMap syntax",
            learningTip: "WeakMap stores key-value pairs with weak references",
            options: [
                { text: "const wm = new WeakMap(); wm.set(key, value);", correct: true, feedback: "Correct! WeakMap uses set() method." },
                { text: "const wm = new WeakMap(); wm[key] = value;", correct: false, feedback: "Use set() method, not bracket notation." },
                { text: "const wm = WeakMap(); wm.set(key, value);", correct: false, feedback: "Use 'new' keyword." },
                { text: "const wm = new WeakMap(key, value);", correct: false, feedback: "Use set() method to add items." }
            ],
            hint: "Uses set() method to store values"
        },
        {
            question: "How do you use Symbol in JavaScript?",
            description: "Select the correct Symbol syntax",
            learningTip: "Symbols create unique identifiers for object properties",
            options: [
                { text: "const sym = Symbol('description');", correct: true, feedback: "Correct! Symbol() creates a unique symbol." },
                { text: "const sym = new Symbol('description');", correct: false, feedback: "Don't use 'new' with Symbol." },
                { text: "const sym = Symbol.create('description');", correct: false, feedback: "Use Symbol() directly." },
                { text: "const sym = symbol('description');", correct: false, feedback: "Symbol is capitalized." }
            ],
            hint: "Symbol() creates unique identifiers"
        },
        {
            question: "What is the correct way to use Reflect?",
            description: "Choose the correct Reflect syntax",
            learningTip: "Reflect provides methods for interceptable operations",
            options: [
                { text: "Reflect.get(obj, prop)", correct: true, feedback: "Correct! Reflect.get() retrieves properties." },
                { text: "obj.Reflect.get(prop)", correct: false, feedback: "Reflect is not a method on objects." },
                { text: "Reflect(obj, 'get', prop)", correct: false, feedback: "Use Reflect.get() method." },
                { text: "get(obj, prop)", correct: false, feedback: "Use Reflect.get()." }
            ],
            hint: "Reflect is a built-in object with static methods"
        },
        {
            question: "How do you use decorators in JavaScript?",
            description: "Select the correct decorator syntax",
            learningTip: "Decorators modify class behavior (experimental feature)",
            options: [
                { text: "@decorator class MyClass { }", correct: true, feedback: "Correct! @ symbol marks decorators." },
                { text: "#decorator class MyClass { }", correct: false, feedback: "Use @, not #." },
                { text: "decorator @class MyClass { }", correct: false, feedback: "Decorator comes before class." },
                { text: "@decorator(class MyClass { })", correct: false, feedback: "Decorator goes before class keyword." }
            ],
            hint: "Uses @ symbol before the class"
        },
        {
            question: "What is the correct way to use BigInt?",
            description: "Choose the correct BigInt syntax",
            learningTip: "BigInt handles integers larger than Number.MAX_SAFE_INTEGER",
            options: [
                { text: "const big = 123456789012345678901234567890n;", correct: true, feedback: "Correct! Add 'n' suffix for BigInt." },
                { text: "const big = BigInt(123456789012345678901234567890);", correct: true, feedback: "Correct! BigInt() constructor also works." },
                { text: "const big = 123456789012345678901234567890;", correct: false, feedback: "Need 'n' suffix or BigInt() constructor." },
                { text: "const big = big(123456789012345678901234567890);", correct: false, feedback: "Use BigInt() or 'n' suffix." }
            ],
            hint: "Add 'n' suffix or use BigInt() constructor"
        },
        {
            question: "How do you use optional chaining?",
            description: "Select the correct optional chaining syntax",
            learningTip: "Optional chaining (?.) safely accesses nested properties",
            options: [
                { text: "const value = obj?.prop?.nested;", correct: true, feedback: "Correct! ?. safely accesses properties." },
                { text: "const value = obj.prop?.nested;", correct: false, feedback: "Use ?. for all potentially null values." },
                { text: "const value = obj?prop?nested;", correct: false, feedback: "Use ?. with dots." },
                { text: "const value = obj?.prop.nested;", correct: false, feedback: "Use ?. for all potentially null values." }
            ],
            hint: "Uses ?. operator for safe property access"
        }
    ]
};
