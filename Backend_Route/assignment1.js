console.log("--------Assignment 1--------")
console.log("            ")
console.log("Question 1:")


let strNum = "123";
var num_Num = Number(strNum);
console.log(num_Num);
console.log(typeof num_Num);

//--------------------------------------------------------------------------------------------------------------

console.log("Question 2:")
function Checkfalsy(Value) {
    if (!Value) {
        return "Invalid"
    } else {
        return "valid"

    }
}
console.log(Checkfalsy(0));
console.log(Checkfalsy(""));
console.log(Checkfalsy(10));

//--------------------------------------------------------------------------------------------------------------

console.log("Question 3:")
for (i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

//--------------------------------------------------------------------------------------------------------------

console.log("Question 4:");

let array = [1, 2, 3, 4, 5]
const evenArray = array.filter(array => array % 2 === 0);
console.log(evenArray);

//--------------------------------------------------------------------------------------------------------------

console.log("Question 5:")
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

//--------------------------------------------------------------------------------------------------------------

console.log("Question 6:");
let Days = 2;

switch (Days) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");

}

//--------------------------------------------------------------------------------------------------------------

console.log("Question 7:")

const strArray = ["a", "ab", "abc"];
const count = strArray.map(strArray => strArray.length);
console.log(count);

//--------------------------------------------------------------------------------------------------------------

console.log("Question 8:");

function check(num){
    if(num%3===0 && num%5===0){
        console.log("Divisible by both");
    }else{
        console.log("None divisible by both");
    }
}

console.log(check(15));

//--------------------------------------------------------------------------------------------------------------

console.log("Question 9:");
const sqr = num => num * num;
console.log(sqr(5));

//--------------------------------------------------------------------------------------------------------------

console.log("Question 10")

let strPerson = {name:'John', age:25};

function strFormat (obj){
    let {name,age} = obj;
    return `${name} is ${age} years old`;
}
console.log(strFormat(strPerson))

//--------------------------------------------------------------------------------------------------------------

console.log("Question 11")
function sumAll(){
    let total = 0;

    for(let i = 0; i<arguments.length;i++){
        total += arguments[i];

    }
    return total;
}

console.log(sumAll(1,2,3,4,5));



//--------------------------------------------------------------------------------------------------------------

console.log("Question 12")
function findLarge(arr){
    let max = arr[0];
     for (let i=1;i<arr.length;i++){
        if (arr[i]>max){
            max = arr[i];
        }
     }
     return max;

}
const num = [1,3,7,2,4]
console.log(findLarge(num));

//--------------------------------------------------------------------------------------------------------------

console.log("Question 13");

function largeNum(arr){

    let max= arr[0];



    for(let i = 0; i<arr.length ; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max


}
const number =[1,3,7,2,4]
console.log(largeNum(number));

//--------------------------------------------------------------------------------------------------------------

console.log("Question 14");
function getObjKey (obj){
    let arrKeys = []

    for(let key in obj){
        arrKeys.push(key);
    }
    return arrKeys;
}
const user = {name: "john", age:30}
console.log(getObjKey(user))

//---------------------------------------------------------------------------------------------------------

console.log("Question 15");

function splitIntoWords(str) {
  let wordsArray = [];
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      // If we hit a space and have a accumulated word, save it
      if (currentWord !== "") {
        wordsArray.push(currentWord);
        currentWord = ""; // Reset for the next word
      }
    } else {
      currentWord += str[i]; // Build the word character by character
    }
  }

  // Push the very last word since there is usually no space at the end of a string
  if (currentWord !== "") {
    wordsArray.push(currentWord);
  }

  return wordsArray;
}

const sentence = "The quick brown fox";
console.log(splitIntoWords(sentence));














//Essay Questions:
//Question 1:
//forEach: An array method. You cannot use break or continue to stop it early.
//for...of: A regular loop. You can use break or continue to stop it early.

//Question 2:
//Hoisting: JavaScript moves variable declarations to the top of the code before running it. var becomes undefined.
//Temporal Dead Zone (TDZ): The danger zone where you cannot use let or const variables before their line of code is read. It throws an error.
//Example:
// Hoisting
//console.log(a); // Output: undefined
//var a = 5;

// TDZ (Temporal Dead Zone)
//console.log(b); // Throws ReferenceError
//let b = 10;

//Question 3:
//== (Loose): Compares only the value. It ignores the data type by changing them to match.
//=== (Strict): Compares both the value and the data type. Highly recommended.

//Question 4:
//Conversion (Explicit): You manually change the data type on purpose.
//Coercion (Implicit): JavaScript automatically changes the data type behind the scenes.
//Example:
// Conversion (Manual)
//let num1 = Number("10"); 

// Coercion (Automatic)
//let result = "5" + 5; 
//console.log(result); // Output: "55" 






