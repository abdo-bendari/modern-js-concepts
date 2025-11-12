                                                                
                                                                //! advanced javascript concepts //


//! template literals & template strings

let name = "Ali"
let age = 21

let aboutMe = `My name is ${name} and my age is ${age} ... I will be ${age + 5} after 5 years`
let aboutMe2 = `My name is ${name} and my age is ${age} ... I'm ${age >= 18 ? "adult" : "young"}`
console.log(aboutMe) // 
console.log(aboutMe2)

//==========================================================================================================//

//! concatenation in arrays
let fruits = ["Apple", "Banana", "Mango"]
let moreFruits = ["Orange", "Pineapple", "Grapes"]
let allFruits = fruits.concat(moreFruits) // merging two arrays

//==========================================================================================================//

//! multi line strings
let multiLine = `This is line 1
This is line 2
This is line 3`
console.log(multiLine)

//==========================================================================================================//


//! block scope with var, let & const

if (true) {
    var firstName = "Ali" 
    let lastName = "Khan"   
    const city = "Lahore"   
    console.log(firstName)
    console.log(lastName)
    console.log(city)
}
console.log(firstName) // accessible
// console.log(lastName) // not accessible
// console.log(city)     // not accessible
// it's better to use let & const instead of var to avoid scope related issues

var time = 5
if (time > 0) {
    var period = "Morning"
    console.log(period)
}
console.log(period) // accessible because var is function scoped

let score = 100
if (score > 50) {
    let level = "Intermediate"
    console.log(level)
}
//  console.log("Level:", level) // not accessible because it's block scoped

 const year = 2023
if (year === 2023) {
    const event = "Launch"
    console.log(event)
}
    // console.log("Event:", event) // not accessible because it's block scoped


//==========================================================================================================//

// it's taking place into globally scoped object (window in browsers)
var country = "Pakistan"
let continent = "Asia"
const planet = "Earth"  
console.log(window.country)   // accessible
console.log(window.continent) // not accessible = undefined
console.log(window.planet)    // not accessible = undefined


//==========================================================================================================//

//!                                      redeclaring variables                                              //

//! 1 //  using var //////////////////////////////////////////////////

var cityName = "Cairo"
var cityName = "Paris" // redeclaration allowed
cityName = "London"      // reassignment allowed
console.log(cityName) // London

var v = "Test var"
for(var v = 0; v < 5; v++) {
    console.log(v) // 0, 1, 2, 3, 4
}
console.log(v) // 5 because var is function scoped


//! 2 //  using let //////////////////////////////////////////////////

let fruit = "Apple"
// let fruit = "Banana" // redeclaration not allowed
fruit = "Banana"       // reassignment allowed
console.log(fruit)

let l = "Test let"
for(let l = 0; l < 2; l++) {
    console.log(l) // 0, 1
}
console.log(l) // "Test let" because let is block scoped


//! 3 //  using const ////////////////////////////////////////////////

const car = "Toyota"
// const car = "Honda" // redeclaration not allowed
// car = "Honda"       // reassignment not allowed
console.log(car)

// const c = "Test const"
// for(const c = 0; c < 2; c++) {
// console.log(c) // 0, 1
// }
// console.log(c) // "Test const" because const is block scoped



//////////////////////////////////! note about const & let : /////////////////////////////////////

const a = "a"
if (true) {
    const a = "b" // different variable due to block scope
    console.log(a) // "b"
}
console.log(a) // "a"

let b = "x"
if (true) {
    let b = "y" // different variable due to block scope
    console.log(b) // "y"
}
console.log(b) // "x"

//   summary: const and let do not allow redeclaration in the same scope, but they can be declared again in a different block scope.


//==========================================================================================================//

//! hoisting

console.log(myVar) // undefined due to hoisting
var myVar = 10
console.log(myVar) // 10

// console.log(myLet) // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20
console.log(myLet) // 20
// console.log(myConst) // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 30
console.log(myConst) // 30  

function myFunction() {
    console.log(myFuncVar) // undefined due to hoisting
    var myFuncVar = 40
    console.log(myFuncVar) // 40

    // console.log(myFuncLet) // ReferenceError: Cannot access 'myFuncLet' before initialization
    let myFuncLet = 50
    console.log(myFuncLet) // 50

    // console.log(myFuncConst) // ReferenceError: Cannot access 'myFuncConst' before initialization
    const myFuncConst = 60
    console.log(myFuncConst) // 60
}

myFunction()


//==========================================================================================================//

//! summary
// 1. Template literals use backticks (`) and allow embedding expressions with ${}.
// 2. Use let and const for block scope; var is function scoped.
// 3. var can be redeclared; let and const cannot.
// 4. Hoisting: var declarations are hoisted and initialized to undefined; let and const are hoisted but not initialized. 
// 5. Avoid using var to prevent scope-related issues; prefer let and const for better code clarity and safety.

//==========================================================================================================//


//! Note-1  : String in memory are arrays of characters 
// example :
let greeting = "Hello"
console.log(greeting[0]) // "H"
console.log(greeting.length) // 5

// But ----> strings are immutable (cannot be changed)
// example :
greeting[0] = "z" // does not change the original string
console.log(greeting) // "Hello"   

//! Note-2  : // Symbol data type is used to create unique identifiers for object properties.
// example :
let sym1 = Symbol("id")
let sym2 = Symbol("id")
console.log(sym1 === sym2) // false, because each symbol is unique
// Symbols are often used to avoid property name collisions in objects.




//////////////////////////////////! primitive vs reference data types ///////////////////////////////////////


                                         //!  primitive Data Types   //

primitiveDataTypes = "string, number, boolean, null, undefined, symbol, bigint"

// primitive data types are stored directly in the variable and are  " immutable "  (cannot be changed).
// when you assign a primitive value to another variable, a copy of the value is made.
// primitive values do not have properties or methods.
// example:
let person1 = "Ali"
person1 = "Ahmed" // creates a new string in memory, original "Ali" remains unchanged
console.log(person1) // "Ahmed"

//  pass by value ( copy of the value is made )
// example:
let name1 = "mohammed"
let name2 = name1 // copy of the value is made
name1 = "Omer" // modifies name1 only
console.log(name1) // "Omer" 
console.log(name2) // "mohammed" because name2 is a copy of name1

//==========================================================================================================//

                                            //!   Reference Data Types   //

referenceDataTypes = "objects, arrays, functions"
// reference data types are stored as references (pointers) to the actual data in memory and are  " mutable "  (can be changed).
// when you assign a reference value to another variable, both variables point to the same object in memory.
// reference values can have properties and methods.

// example:
let persons = ["Ali", "Ahmed", "Sara" , "Omer"] 
persons[0] = "Mohammed" // modifies the original array in memory
persons.push("Lina") // adds a new element to the original array in memory
console.log(persons) // ["Mohammed", "Ahmed", "Sara" , "Omer", "Lina"]


const list = ["Ali", "Ahmed", "Sara" , "Omer"] 
const anotherList = list
anotherList[0] = "Mohammed"
list.push("Lina")
console.log(anotherList) // ["Mohammed", "Ahmed", "Sara" , "Omer", "Lina"]
console.log(list) // ["Mohammed", "Ahmed", "Sara" , "Omer", "Lina"]
// pass by reference ( both variables point to the same object in memory )

//==========================================================================================================//


                                         //! Creating Shallow Copy  //
// to create a shallow copy of an object or array, you can use methods like Object.assign()
// for objects or the spread operator (...) for arrays.

// example for object:
let originalObj = { name: "Ali", age: 21 }
let copiedObj = Object.assign({}, originalObj) // creates a shallow copy
copiedObj.name = "Ahmed" // modifies copiedObj only
console.log(originalObj) // { name: "Ali", age: 21 }
console.log(copiedObj) // { name: "Ahmed", age: 21 }

// example for array:
let arr1 = ["AAA", "BBB", "CCC", "DDD"] 
let arr2 = Object.assign([], arr1) // creates a shallow copy
arr2[0] = "ZZZ" // modifies arr2 only
arr2.push("EEE") // adds new element to arr2 only
console.log(arr1) // ["AAA", "BBB", "CCC", "DDD"]
console.log(arr2) // ["ZZZ", "BBB", "CCC", "DDD", "EEE"]

// example for array with spread operator :
let originalArr = ["AAA", "BBB", "CCC", "DDD"] 
let copiedArr = [...originalArr] // creates a shallow copy
copiedArr[0] = "ZZZ" // modifies copiedArr only
copiedArr.push("EEE") // adds new element to copiedArr only
console.log(originalArr) // ["AAA", "BBB", "CCC", "DDD"]
console.log(copiedArr) // ["ZZZ", "BBB", "CCC", "DDD", "EEE"]

//==========================================================================================================//
                                            //!  Freezing Objects & Arrays  //

//! note :  to lock the original object or array from being modified, you can use Object.freeze() method.

// example for object:
let frozenObj = { key: "value" }
Object.freeze(frozenObj)
frozenObj.key = "newValue" // modification will be ignored
console.log(frozenObj) // { key: "value" }

// example for array:
let frozenArr = ["item1", "item2"]
Object.freeze(frozenArr)
frozenArr[0] = "newItem" // modification will be ignored
frozenArr.push("item3") // addition will be ignored AND will throw an error in strict mode
console.log(frozenArr) // ["item1", "item2"]

//==========================================================================================================//


                                                  //! Arrow Functions ///

//! traditional function
function add(a, b) {
    return a + b
}           
console.log(add(2, 3)) // 5

//! arrow function   

//1// basic syntax
const addArrow = (a, b) => {return a + b}            
console.log(addArrow(2, 3)) // 5       

//2// arrow function with single parameter
const addSingleParam = a => {return a + 10}          
console.log(addSingleParam(5)) // 15

const myName = Name => Name === "Ali" ? "Welcome Ali" : "Welcome Guest"
console.log(myName("Ali")) // "Welcome Ali"
console.log(myName("Omer")) // "Welcome Guest"

//3// arrow function with implicit return (no need for curly braces and return keyword)
const addImplicit = (a, b) => a + b            
console.log(addImplicit(2, 3)) // 5

//4// arrow function with no parameters
const greet = () => "Hello, World!"
console.log(greet()) // "Hello, World!"

//5// arrow function returning an object
const createUser = (name, age) => ({name: name, age: age})
console.log(createUser("Ali", 21)) // {name: "Ali", age: 21}

//6// arrow function with multiline body
const multiply = (a, b) => {
    const result = a * b
    return result
}
console.log(multiply(2, 3)) // 6

//==========================================================================================================//

//////////////////////////! Day 5 End /////////////////////////////////////////////////////////////////


//! Spread Operator (...) 
// The spread operator (...) allows you to expand iterable objects (like arrays or strings) into individual elements.
// It is commonly used for copying arrays, merging arrays, and passing elements as function arguments.

//* example for array :
let numbers = [1, 2, 3]
let moreNumbers = [0,...numbers, 4, 5, 6] // copying and adding new elements
console.log(moreNumbers) // [0, 1, 2, 3, 4, 5, 6]

//* example for string :
let str = "Hello"
let chars = [...str] // spreading string into individual characters
console.log(chars) // ["H", "e", "l", "l", "o"]

//* example for function arguments :
function sum(a, b, c) {
    return a + b + c
}
let arr = [1, 2, 3]
console.log(sum(...arr)) // 6

//* concatenation using spread operator :
let Arr1 = ["B", "C"]
let Arr2 = ["D", "E", "F"]
let combinedArr = ["A",...Arr1, ...Arr2 , "G"] // merging two arrays
console.log(combinedArr) // ["A", "B", "C", "D", "E", "F", "G"]

//* example for object :
let obj1 = { name: "ali"}
let obj2 = { age: 23 }
let mergedObj = { ...obj1, ...obj2 , city : "New York" } // merging two objects and adding new property
console.log(mergedObj) // { name: "ali", age: 23, city: "New York" }

//* function calls with spread operator :
let ages = [21, 22, 23]
console.log(Math.max(ages)) // NaN (incorrect, as Math.max expects individual numbers)
console.log(Math.max(...ages)) // 23 (correct, using spread operator to pass individual numbers)

//* example for nested arrays :
let nestedArr = [[1, 2], [3, 4], [5, 6]]
let flatArr = [].concat(...nestedArr) // flattening nested array
console.log(flatArr) // [1, 2, 3, 4, 5, 6]

//* function arguments with spread operator :
function displayColors(color1, color2, color3) {
    console.log(`Colors: ${color1}, ${color2}, ${color3}`)
}
let colors = ["Red", "Green", "Blue"]   
displayColors(colors[0], colors[1], colors[2]) // without spread operator (not ideal)
displayColors(...colors) // Colors: Red, Green, Blue


//==========================================================================================================//

//! Rest parameters ( ... ) 
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
// It is denoted by three dots (...) followed by the parameter name in the function definition.
// Rest parameters must be the last parameter in the function definition.

//* example for rest parameters :
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}
console.log(sum(1, 2, 3, 4, 5)) //

//* function with rest parameters :
function multiply(factor, ...numbers) {
    return numbers.map(num => num * factor)
}
console.log(multiply(2, 1, 2, 3)) // [2, 4, 6]

//* example with fixed and rest parameters :
function introduce(greeting, ...names) {
    return `${greeting} ${names.join(", ")}`
}   
console.log(introduce("Hello", "Ali", "Ahmed", "Sara")) // "Hello Ali, Ahmed, Sara"

//* example with no rest parameters :
function logMessages(...messages) {
    messages.forEach(msg => console.log(msg))
}
logMessages("Message 1", "Message 2", "Message 3")
// Output:
// Message 1
// Message 2
// Message 3

//* example with array and rest parameters :
function concatenate(separator, ...strings) {
    return strings.join(separator)
}
console.log(concatenate(" - ", "A", "B", "C")) // "A - B - C"

//* example with rest parameters and default values :
function createUser(role = "guest", ...permissions) {
    return { role: role, permissions: permissions }
}   
console.log(createUser("admin", "read", "write", "execute")) // { role: "admin", permissions: ["read", "write", "execute"] }
console.log(createUser()) // { role: "guest", permissions: [] }

//* example with rest parameters and default values :
function dataInfo(firstName, lastName, ...otherInfo) {
    console.log(`First Name: ${firstName}`)
    console.log(`Last Name: ${lastName}`)
    console.log(`Other Info: ${otherInfo.join(", ")}`)
}
dataInfo("Ali", "Mohammad", 21, "Cairo", "Egypt", "Engineer")
// Output:
// First Name: Ali
// Last Name: Mohammad
// Other Info: 21, Cairo, Egypt, Engineer


//==========================================================================================================//


////////////////////////////////////////////////////////! Day 6 End /////////////////////////////////////////////////////////////////


                                                  //!  Destructuring Assignment //
// Destructuring assignment is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.

//! destructuring for Arrays :
//* example - 1 :
let fruitsList = ["Apple", "Banana", "Mango"]
const [fruit1, fruit2, fruit3] = fruitsList // destructuring assignment
console.log(fruit1) // "Apple"
console.log(fruit2) // "Banana"
console.log(fruit3) // "Mango"

//* example - 2 :
let rgb = [255, 0, 0]
const [red, green, blue] = rgb // destructuring assignment
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`) // Red: 255, Green: 0, Blue: 0

//* example with rest operator :
let scores = [90, 80, 70, 60, 50]
const [topScore, secondScore, ...otherScores] = scores // using rest operator
console.log(topScore) // 90
console.log(secondScore) // 80
console.log(otherScores) // [70, 60, 50]

//* example with skipping elements :
let numbersList = [10, 20, 30, 40, 50]
const [ , , num3 , , num5] = numbersList // skipping elements
console.log(num3) // 30
console.log(num5) // 50

//* example with default values :
//* example - 1 :
let roles = ["User" , "Admin"]
const [role1, role2, role3 = "Guest"] = roles // default value for role3
console.log(role1) // "User"
console.log(role2) // "Admin"
console.log(role3) // "Guest"

//* example - 2 :
let dimensions = [100]
const [width, height = 200] = dimensions // default value for height
console.log(`Width: ${width}, Height: ${height}`) // Width: 100, Height: 200

//* example - 3 :
let listNum = [, 20, 30]
const [L1 = 1, L2 = 1, L3 = 1] = listNum // default values
console.log(L1) // 1
console.log(L2) // 20
console.log(L3) // 30

//* example with swapping variables :
let g = 5
let z = 10
console.log(`Before Swap: g = ${g}, z = ${z}`) // Before Swap: g = 5, z = 10
[g, z] = [z, g] // swapping using destructuring
console.log(`After Swap: g = ${g}, z = ${z}`) // After Swap: g = 10, z = 5

//* example with nested arrays :
let nestedArray = [1, [2, 3], 4]
const [numA, [numB, numC], numD] = nestedArray // destructuring nested array
console.log(numA) // 1
console.log(numB) // 2
console.log(numC) // 3
console.log(numD) // 4

//* example with function return values :
function getCoordinates() {
    return [10, 20]
}
const [x, y] = getCoordinates() // destructuring function return value
console.log(`X: ${x}, Y: ${y}`) // X: 10, Y: 20

//==========================================================================================================//

//! destructuring for Objects :

//* example - 1 :
let personDetails = { firstName: "Ali", lastName: "mohamed", tall: 155 }
const { firstName, lastName, tall } = personDetails // destructuring assignment
console.log(firstName) // "Ali"
console.log(lastName) // "mohamed"
console.log(tall) // 155


//* example - 2 :
let carDetails = { brand: "Toyota", model: "Corolla", year: 2020 }
const { brand, model, yearModel } = carDetails // destructuring assignment
console.log(`Brand: ${brand}, Model: ${model}, Year: ${ yearModel}`) // Brand: Toyota, Model: Corolla, Year: 2020

//* example with renaming variables :
let user = { name: "ali123", email: " ali@gmail.com" }
const { name: userName, email: userEmail } = user // renaming variables
console.log(userName) // "ali123"
console.log(userEmail) // "ali@gmail.com"

//* example with default values :
let settings = { theme: "dark" }
const { theme, fontSize = 14 } = settings // default value for fontSize
console.log(theme) // "dark"
console.log(fontSize) // 14 

//* example with assigning to new variables name and providing default values :
let Data = {myName: "Omer" , myAge : 25 , MyCity : "Cairo"}
const { myName : Name = "Guest" , myAge : Age = 18 , MyCity : City = "Unknown"} = Data
console.log(Name) // "Omer"
console.log(Age)  // 25
console.log(City) // "Cairo"

//* example with rest operator in objects destructuring :
let employee = { id: 1, name: "Ali", position: "Developer", salary: 5000 }
const { id, employeeName, ...otherDetails } = employee // using rest operator
console.log(id) // 1
console.log(employeeName) // "Ali"
console.log(otherDetails) // { position: "Developer", salary: 5000 }
