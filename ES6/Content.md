# WE COVER

*Understanding ES6 FOR REACTJS *


```bash
ES6 introduce 2 new ways to Vreate variables.

let: It is like a replacement for var.
For example,

let myName = "Max";
let myNum = 18;

const: It is used to create variables with constant values also
known as constants. The variables created using const cannot
be updated later in the code.
For example,

const API_URL = "https://api.pat.com/v1";
```


```bash
It's just a string which allows emedding expressions inside it.
To create a template string you don't use single or double quote,
you use back tick. The expressions are embedded by wrapping them inside ${}.


For example:
const mName = `Hello ${pat}`
Here, the expression is a variable.
const moreName = `Hello ${fullName()}`
Here, the expression is a function call
```

```bash
ES6 gives us a new syntax for defining functions using a fat arrow.
Arrow functions bring a lot of clarity & code reduction.
Syntax:

function mHi(name) {
	return('Welcome' + name);
}

const mHi = name => {
	return(`Welcome ${name}`)
}
```

```bash
Rest and Spread Operator
```