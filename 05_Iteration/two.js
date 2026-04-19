



// ## 1. `for...of` Loop

// Used to iterate over **iterables** (arrays, strings, Maps, Sets).


const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num); // 1, 2, 3, 4, 5
}


// Works on strings too — gives each **character**:


const greetings = "div";
for (const greet of greetings) {
    console.log(`Each char of message is ${greet}`);
    // d, i, v
}


// Does NOT work on plain objects `{}` — objects are not iterable by default.



// 2. Map

// `Map` is a built-in JS object that stores key-value pairs.


const map = new Map();
map.set('I', "India");
map.set('FR', "France");
map.set('CH', "China");


// ### Iterating Map


// for...in does NOT work on Map — gives no output
for (const forMap in map) {
    console.log(forMap); // nothing printed
}

// for...of works — use destructuring to get key & value
for (const [key, value] of map) {
    console.log(key, ":-", value);
    // I :- India
    // FR :- France
    // CH :- China
}


// > `[key, value]` is **array destructuring** — Map entries are returned as `[key, value]` pairs.


// 3. `for...in` Loop

// Used to iterate over **keys** of a plain object.


const anotherObject = {
    'js': "javascript",
    'py': "python",
    'cpp': "c++",
    'swift': "swift by apple",
};

for (const key in anotherObject) {
    console.log(`${key} :- ${anotherObject[key]}`);
    // js :- javascript
    // py :- python
}


// `for...in` on Arrays — gives INDEXES not values


const anotherArray = ['a', 'b', 'c', 'd', 'e', 'f'];

for (const key in anotherArray) {
    console.log(key);              // 0, 1, 2, 3, 4, 5 (indexes)
    console.log(anotherArray[key]); // a, b, c, d, e, f (values)
}


//  `for...in` on arrays gives **index** not value. Use `arr[key]` to get value. Prefer `for...of` for arrays.



// 4. `forEach` Loop

// Array method. Takes a **callback function


const coding = ['java', 'python', 'ruby', 'c++', 'swift'];

// Using anonymous function
coding.forEach(function (item) {
    console.log(item);
});

// Using arrow function — also gives index and full array
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
// java 0 [ 'java', 'python', 'ruby', 'c++', 'swift' ]
// python 1 [ 'java', 'python', 'ruby', 'c++', 'swift' ]
// ...

// Passing function reference (not calling it)
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe); // correct — no () at the end

//  `forEach` cannot be stopped with `break`. Use `for...of` if you need to break early.

// 5. Dot Notation vs Bracket Notation


const obj = {
    'name': 'divyanshu',
    'last name': 'maurya',  // key has a space
    'age': 20
};

console.log(obj.name);         // ✅ dot notation — works (no space in key)
console.log(obj["last name"]); // ✅ bracket notation — required (space in key)
console.log(obj.age);          // ✅ dot notation — works

/*
| Situation | Use |
|---|---|
| Normal key (no spaces/special chars) | `obj.key` |
| Key has spaces or special characters | `obj["key name"]` |
| Key stored in a variable | `obj[variable]` |

*/

// 6. Iterating Array of Objects


const myArray1 = [
    { 'name': 'divyanshu', 'last name': 'maurya', 'age': 20 },
    { 'name': 'div',       'last name': 'maurya', 'age': 21 },
    { 'name': 'divya',     'last name': 'maurya', 'age': 22 }
];

myArray1.forEach((item) => {
    console.log(item.name);         // dot — no space
    console.log(item["last name"]); // bracket — has space
    console.log(item.age);          // dot — no space
});




/*Quick Summary Table

| Loop | Works On | Gives |
|---|---|---|
| `for...of` | Arrays, Strings, Maps, Sets | Values |
| `for...in` | Objects | Keys |
| `for...in` on Array | Arrays | Indexes (not values!) |
| `forEach` | Arrays only | item, index, array |
| `for...of` on Map | Map | `[key, value]` pairs |



## Common Mistakes to Avoid

- ❌ `for...of` on plain object → **error** (not iterable)
- ❌ `for...in` on Map → **no output** (Map not enumerable this way)
- ❌ `obj.last name` → **syntax error** (space in key, use bracket)
- ❌ `coding.forEach(printMe())` → **calls function immediately**, pass reference without `()`
- ❌ Trailing comma after last property in object is fine in modern JS but watch for syntax errors in keys like `'email: 'value'` (unclosed quote)
*/