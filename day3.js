//Exercises: Level 1
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and
//   use the typeof operator to check different data types.

let firstName = "samarth"
let lastName = "bhosale"
let country = "India"
let city = "Pune"
let age = 25
let isMarried = false
let year = 1998

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

//2. Check if type of '10' is equal to 10

let check1 = typeof('10') == typeof(10)
console.log(check1)

//3. Check if parseInt('9.8') is equal to 10

let check2 = typeof(parseInt('9.8')) == typeof(10)
console.log(check2)

//4. Boolean value is either true or false.
//  4.1. Write three JavaScript statement which provide truthy value.
//  4.2. Write three JavaScript statement which provide falsy value.

let a1 = 10>0
let a2 = 'sam' == 'sam'
let a3 = typeof(10.00) == typeof(5.1)

console.log(a1)
console.log(a2)
console.log(a3)

//5. Figure out the result of the following comparison expression first without using console.log().
//  After you decide the result confirm it using console.log()
//  Find the length of python and jargon and make a falsy comparison statement.

let b1 = 'python'
let b2 = 'jargon'

console.log(b1.length)
console.log(b2.length)

console.log(typeof(b1) == b2.length)

//6. Figure out the result of the following expressions first without using console.log().
//   After you decide the result confirm it by using console.log()
//  There is no 'on' in both dragon and python

let b3 = 'dragon'
console.log(!b1.includes('on'))
console.log(!b3.includes('on'))

//7. Use the Date object to do the following activities

const now = new Date()
//What is the year today?
console.log(now.getFullYear())
//What is the month today as a number?
console.log(now.getMonth() + 1)
//What is the date today?
console.log(now.getDate())
//What is the day today as a number?
console.log(now.getDay())
//What is the hours now?
console.log(now.getHours())
//What is the minutes now?
console.log(now.getMinutes())
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now())

// Exercises: Level 2
//Write a script that prompt the user to enter base and height of the triangle and calculate an
// area of a triangle (area = 0.5 x b x h).
let c1 = prompt("Enter Base : ")
let c2 = prompt("Enter Height : ")

let area = 0.5 * c1 * c2

console.log(area)
