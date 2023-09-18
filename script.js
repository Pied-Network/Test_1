"use strict"; //Good Programming Practice to find the bugs in the code.

function logger() {
  console.log("My Name is Sadeesha");
}

//callung / running / invoking function
logger();
logger();
logger();

console.log("\n");

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges); //a simple block of code
  const juice = `Juice with ${apples} Apples and ${oranges} Oranges. `;
  return juice;
}

//calling the paramerized function
const juice1 = fruitProcessor(2, 6); //assigninng the return data to a variable called juice1
console.log(juice1);

const juice2 = fruitProcessor(3, 3);
console.log(juice2);

console.log(fruitProcessor(5, 7)); // Printing the Return Value without assigning the data to a variable

console.log("\n");

// Lecture - Function Declarations vs Expressions 🧑‍💻

//Function Declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(2000);

//Function Expressions

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(2000);

//Printing the Both Functions
console.log(age1, age2);

// This is an Additional Code Wrote to get the input From the User

/* function CalculateAge(birthYear)
{
    birthYear =prompt("Please Enter Your Birth Year");
    const age=(2023-birthYear);
    return age;
}


const SadeeshaAge = CalculateAge();
console.log(SadeeshaAge);
 */

// Lecture - Arrow Function 🧑‍💻

/* const calcAge3 = birthYear => 2023-birthYear;
const age3 = calcAge3(2000);
console.log(age3); */

// Another Example for arrow function to calcualte years left for a Retirement
/* const yearsUntilRetirement = (birthYear,FirstName) => 
{
    const age = 2023-birthYear;
    const Retirement = 65-age;
    return `${FirstName} Retires in  ${Retirement} Years `;
} */

// calling the function directly to print the value
/* console.log(yearsUntilRetirement(2000,"Sadeesha"));
console.log(yearsUntilRetirement(2004,"Oneli")); */

console.log("\n");

// Lecture - Functions Calling the other Functions 🧑‍💻

function cutFruitPieces(fruit) {
  return fruit * 4;
}

// the same function above coded - just only for learning purpose i have repeated it rather commenting above
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples); //calling the cutFruitPieces function within the function
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

//calling the function
console.log(fruitProcessor(2, 3));

console.log("\n");

// Lecture - Reviewing Functions 🧑‍💻

/* The above code that we used to find the retirement years remaining has a bug which
is when the age is so higher number the remaining retirement years become negative value 
*/

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, FirstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${FirstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${FirstName} has already retired 🎉`);
    return -1;
  }
}; // calling the function

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1850, "Mike"));

console.log("\n");

// Lecture - Introduction to Arrays  🧑‍💻

const friends = ["Michael", "John", "Peter"]; //an array
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); //another way of writing an array in js

console.log(friends[0]);
console.log(friends[2]);

//Way to find the number of elements in an array
console.log(friends.length);
console.log(friends[friends.length - 1]); // this way also we can print an element in an array

// updating an element in an array - we can update an element in an array but cannot change all the elemenets
friends[2] = "Sadeesha";
console.log(friends[2]); // Friends =['Michael','John','Sadeesha'];

//ways to insert the values to array
const firstname = "jonas";
const jonas = [firstname, "Schmedtman", 2023 - 1991, "teacher", friends]; //in here the friedns is the above array we declared
console.log(jonas);
console.log(jonas.length);

//Exercise
const CalcAge = function (birthyear) {
  return 2023 - birthyear;
};

const Years = [1990, 1967, 2002, 2010, 2018];

const Age1 = calcAge(Years[0]);
const Age2 = calcAge(Years[1]);
const Age3 = calcAge(Years[years.length - 1]);
console.log(Age1, Age2, Age3);

const Ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(Years[years.length - 1]),
]; //storing the values in another array called age
console.log(Ages);

console.log("\n");

// Lecture - Basic Array Operation Methods 🧑‍💻 - push,pop,

//Adding an eleement to an array - End of the Array

const Names = ["Sadeesha", "Oneli", "James"];
Names.push("Vince");
console.log(Names);

//Adding an Element to the Front of the Array
Names.unshift("Pop");
Names.unshift("Jeniffer");
console.log(Names);

//Removing an Element From the array
Names.pop(); // remove the last element of the array
Names.pop();
console.log(Names);

//Removing the first element from the array
Names.shift(); //First
console.log(Names);

//Check the Index of an Element
console.log(Names.indexOf("Oneli"));
console.log(Names.indexOf("Sadeesha"));

//Check whether an Element Exist in an Array
console.log(Names.includes("Jakita"));

if (Names.includes("Pop")) {
  console.log("There is an Element Called Pop ");
}

console.log("\n");

//Lecture - Introduction to Objects 🧑‍💻 - Another DS

/* Rather than an array the object DS has key values for each element which we can reference these 
elements by a name rather than index on array

This is a Good DS to Order Various Elements with same data type as below 

check the example below 
*/

const Sadee = {
  FName: "Sadeesha",
  LName: "Jayaweera",
  age: 2023 - 2000,
  job: "Customer Service Executive",
  Friends: ["Lord Ganesh", "Lord Hanuman"],
}; // each key has an value: As an example Fname key has  a value of Sadeesha

console.log("\n");

//Lecture - Dot vs Bracket Notation

// Retrieving the Values from an Object - Displaying Values

//There are two methods do that one is bracket and other one is

console.log(Sadee.Friends); //using the brackets notation
console.log(Sadee["Friends"]); // Dot notation the diference between these two is we can write expressions inside this

// Good Example to showcase the Difference Between the Dot and the Notation

const InterestedIn = prompt(
  " What do you want to Know about Sadeesha ? Choose Between Fname, Lname, age, job and Friends "
);

if (Sadee[InterestedIn]) 
{
  console.log(Sadee[InterestedIn]);
} else {
  console.log("Wrong request! Choose Between the Entries"); // this will onlye be work with dot (try with Asking for job)
}

//checking with the bracket notation
/* console.log(Sadee.InterestedIn); when tried to check for job - result was undefined - cannot do the check using the brackets notation  */

// Adding Values to the Objects
Sadee.location = "Sri Lanka"; //using brackets
Sadee["facebook"] = "Sadeesha_Jayaweera";
console.log(Sadee);

/* Challend by the Jonas 
Jonas has 3 friends as i have 2 friends, and his best friend is called michael 
write a way to display this - no hard coding 

console.log(`${jonas.firstname} has ${jonas.friends.length} friends, and his best friend is called 
${jonas.friends[0]}`);
 */

//Lecture - Object Methods 🧑‍💻 - write the notes on a leisure time

// lecture - The For Loop 🧑‍💻

for (let rep = 1; rep <= 10; rep++)
 {
  console.log(`I Love to Code ✌️ ${rep}`); //rep means repetition in just short form
}

console.log("\n");

// lecture - Looping Arrays, Breaking & Continuing 🧑‍💻

const Sadeesha = [
  "Sadeesha",
  "Jayaweera",
  2023 - 2000,
  "Customer Service Executive",
  ["Lord Ganesh", "Lord Hanuman"],
  true,
];

for (let i = 0; i < Sadeesha.length; i++)
 {
  console.log(Sadeesha[i], typeof Sadeesha[i]);
}

const Year = [1992, 2000, 2004, 2006];
const Age = [];

for (let i = 0; i < Year.length; i++) 
{
  //pushing values to the empty array called Age
  Age.push(2023 - Year[i]);
}

console.log(Age);

//Continue and Break

console.log("------ONLY STRINGS -------");
for (let i = 0; i < Sadeesha.length; i++) 
{
  if (typeof Sadeesha[i] !== "string") continue;

  console.log(Sadeesha[i], typeof Sadeesha[i]);
}

console.log("------BREAK WITH NUMBER -------");
for (let i = 0; i < Sadeesha.length; i++) 
{
  if (typeof Sadeesha[i] === "number") break; // breaks when a number found in the array

  console.log(Sadeesha[i], typeof Sadeesha[i]);
}
console.log("\n");

// lecture - Looping Backwards and Loops in Loops  🧑‍💻
for (let i = Sadee.length - 1; i >= 0; i--) 
{
  console.log(i, Sadee[i]); //reversing the loop
}

//Loop in a loop
for (let exercise = 1; exercise < 4; exercise++) 
{
  console.log(`------- Starting Exercises ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting Weight reoetition ${rep} 🏋️‍♀️`);
  }
}

console.log("\n");

// Lecture - While Loop 🧑‍💻

let i = 0;
while (i < 4) 
{
  //until i=4 this will get printed
  console.log("Hi Guys!");
  i++;
}
