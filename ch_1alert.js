//alert("hi from a different file!");
//console.log(Math.floor(Math.random() * 100));
//let a = 10;
//console.log(a); //this line print the value of a on console
/*in this code we are definig the comment through single and multi_line comment
to demonstrate about the commen*/
//this line will print my name

//console.log("my name is HAMZA");
/* now i commenting that console to make sure nothing can be print on console*/
//console.log("HAMZA");
/*let x = 45 ;    
console.log(x);
*/
//  chapter # 1
/*
let str = "hamza";
let str1 = `i am ${str}`;
console.log(str1);
let are = "are you";
let you = "comedy";
let me = "me";
console.log(`${are} ${you} ${me}`);
let st4 = "Hello,\nwhat's your name? Is it Mike ?";
console.log(st4);
/*
let str2 = "Hii `hello ";
let str3 = `Hiii`;
console.log(str);
console.log(str1);
console.log(str2);
*/
// chapter # 2 NUMBERS
/*let intNum = 11;
let decNum = 10.1;
let expNum = 1.4e5;
/*let octNum = 0010;
let binNum = 0ab10;
let hexNum = 0a10;
*/
/*
console.log(intNum, decNum, expNum);
let xint = 925920n;
console.log(xint);
//rslt = xint + decNum;
//console.log(rslt);
*/
// chapter 2 ex 2.1
/*
let strD = "hello!";
let strS = "hello!";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log(strD, typeof [strD]);
console.log(strS, typeof [strS]);
console.log(val1, typeof [val1]);
console.log(val2, typeof [val2]);
console.log(myNum, typeof [myNum]);
*/
// chapter 2 ex 2.2
/*
Create a variable for your name, another one for your age, and another one
for whether you can code JavaScript or not.
Log to the console the following sentence, where name , age and
true / false are variables: */
/*
let name = 'HAMZA';
let age = 20;
let codeOrNot = "i am doing conding";
console.log(`My name is ${name}, i am ${age} year old and ${codeOrNot}`);
*/
// Adding Numbers and concatenating strings
/*
var a = 2;
var b = 4;
var res = (a + b);
console.log(res);
var a1 = '25';
var b2 = 40;
var rslt = (a1 + b2);
console.log(rslt);
*/
// Subtraction
/*
let n1 = 4;
let n2 = 3;
let str1 = "hello";
let n3 = 4;
let rslt1 = (n1 - n2);
let rslt2 = (str1-n3);
console.log(rslt1, rslt2);
*/

// multiplication
/*
let n1 = 4;
let n2 = 3;
let str1 = "hello";
let n3 = 4;
let rslt1 = (n1 * n2);
let rslt2 = (str1 * n3);
console.log(rslt1, rslt2);
*/

// division
/*
let n1 = 4;
let n2 = 3;
//let str1 = "hello";
let n3 = 4;
let rslt1 = (n1 / n2 / n3);
console.log(rslt1);
*/

// exponention
/*
let n1 = 4;
let n2 = 3;
let rslt1 = (n1 ** n2);
console.log(rslt1);
*/

// modulus
/*
let n1 = 125;
let n2 = 60;
let rslt1 = (n1 % n2);
console.log(rslt1);
*/

// Unary operators :- Increment and Decrement
/*
let n1 = 43;
n1++;
console.log(n1);
let n2 = 56;
n2--;
console.log(n2);
*/

// prefix and postfix operators
/*
let nm = 2;
console.log(nm++);
//first this line will console
console.log(nm);
console.log('**********');
let n1 = 4;
let n2 = 5;
let n3 = 2;
console.log((n1++ + ++n2 * n3++));
*/

/*
var a = Number(2);
var b = Number(3);
console.log(a ** b);
*/

// assignment operator
/*
let x = 2;
x += 2;
console.log(x);
x =-2;
console.log(x);
x*=6;
console.log(x);
x/=3;
console.log(x);
x **=2;
console.log(x);
x%=2;
console.log(x)
let a = 2;
let b = 3;
let c = 4;
b += a;
a /= c;
do {
c %= b;
console.log(a);
console.log(c);
**/
//Combinig the operators
/*
Grouping (...) (x + y)
Exponentiation ** x ** y
Prefix increment and decrement -- , ++ --x , ++y
Multiplication, division, modulus * , / , % x * y , x / y , x % y
Addition and subtraction + , - x + y , x - y
*/

/*
Practice exercise 2.3
Write some code to calculate the hypotenuse of a triangle using the
Pythagorean theorem when given the values of the other two sides. The
theorem specifies that the relation between the sides of a right-angled
triangle is a2 + b2 = c2.
The Pythagorean theorem only applies to right-angled triangles. The sides
connected to the 90-degree angle are called the adjacent and opposite sides,
represented by a and b in the formula. The longest side, not connected to the
90-degree angle, is called the hypotenuse, represented by c.
You can use prompt() to get the value for a and b. Write code to get the
value from the user for a and b . Then square the values of both a and b
before adding them together and finding the square root. Print your answer
to the console
*/
/*
let a = Number(prompt("enter a first number"));
console.log(`the first side (a) is :${a}cm`);
a = a*a;
console.log(a);
let b = Number(prompt("enter a 2nd number"));
console.log(`the 2nd side (b) is :${b}cm`);
b = b*b;
console.log(b);
let c = Number(a + b);
console.log(`the result (c) is: ${c}cm`);
*/

// chapter 2
/*      
Miles-to-kilometers converter
Create a variable that contains a value in miles, convert it to kilometers, and
log the value in kilometers in the following format:
The distance of 130 kms is equal to 209.2142 miles
For reference, 1 mile equals 1.60934 kilometers.
BMI calculator
Set values for height in inches and weight in pounds, then convert the
values to centimeters and kilos, outputting the results to the console:
1 inch is equal to 2.54 cm
2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight
(in kilos) divided by squared height (in meters). Output the results to the console. -*/
/*
let varMile = Number(prompt("Enter a miles to convert in Kilometers"));
console.log(`Miles :${varMile}`);
result22 = varMile * 1.60934;
console.log(result22);
console.log(`The ${varMile } miles are ${result22} kilometers`);
*/
/*
let heightt = Number(prompt("Enter the height in inches"));
console.log("the given height is:", heightt, "inches");
height = heightt * 0.0254;
console.log(`the ${heightt} inches are ${height} meters`);

let weightt = Number(prompt("Enter the weight in pounds"));
console.log("the given weight is:", weightt, "pounds");
weight = weightt * 0.453592;
console.log(`the ${weightt} pounds are ${weight} kilos`);
// BMI CALCULATOR
let BMI;
BMI = weight / (height * height);
console.log(`the bmi calculations are ${BMI}`);
*/
//&& OPERATOR
// Returns only TRUE if both statements were true
// || operator
// returns only false if both were false
// ! operator
// swap or opposite
/*
const a = 5;  
const b = 10; 
console.log(a > 0 && b > 0); //t
console.log(a == 5 && b == 4); // F
console.log(false || true); //T
console.log(a == 3 || b == 10); //T
console.log(a == 3 || b == 7); //F
*/
/*Chapter # 3 
Arrays */
/*
Array = ["i","",true,`legend`,"age",20];
console.log(typeof Array[0]);
console.log(typeof Array[1]);
console.log(typeof Array[2]);
console.log(typeof Array[3]);
console.log(typeof Array[4]);
console.log(typeof Array[5]);
Array[5] = "20";
console.log(typeof Array[5]);
console.log(`length of APPrray: ${Array.length + 1}`);*/
//Ex # 3.1
/*
1. Create an array to use as your shopping list with 3 items: "Milk,"
"Bread," and "Apples."
2. Check your list length in the console.
3. Update "Bread" to "Bananas."
4. Output your entire list to the console.
*/

//shoppingList = ["Apple", "Milk", "Bread"];
/*console.log(shoppingList);
console.log(`The lenght of Array is: ${shoppingList.length}`);
shoppingList[2] = "Banana";
console.log(`the updated array :- ${shoppingList}`);
*/
/*
//Array Methods
//push() will add new elements in array
shoppingList.push = "Almonds";
console.log(shoppingList, shoppingList.length); // updated array with push method
console.log(
  `the updated array after applying push method ${shoppingList} and its length is :${shoppingList.length}`
);
let lenghtOfshoppingList ;
console.log(push);
*/
/*
sList = ["grape", "orange", "lem"];
sList.push("apple");
let Fruits = sList.push("lime");
console.log(`Fruits: ${sList} and Legth is: ${sList.length}`);
*/
// SPLICE
let shapes = ["circle", "oval", "sqaure", "triangle", "rectangle"];
console.log(shapes, shapes.length);
shapes.splice(2, 0, "pentagon", "round");
console.log(shapes, shapes.length);
shapes.splice(2,2, "Hexagon", "trigon", "Octagon");
console.log(shapes, shapes.length);