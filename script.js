//#1. Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero. 

// function numCheck(n){
//     if(n > 0 ){
//         console.log("Num is Positive")
//     }
//     else if(n < 0){
//         console.log("Num is Negative")
//     }
//     else{
//         console.log("Zero")
//     }
// }
// let result = numCheck(-6);
// console.log(result);






//# 2. Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. 


//let num = prompt("enter a num");

// let res = 1;
// function fact(num){
//  for(let i = 1; i <= num; i++){
//     res = res * i;
//  }
//     return res;
// }
// res = fact(num);
// console.log(res);


//Using recursive function
// function factorial(n){
//     if(n == 0){
//         return 1;
//     }
//     else{
//         return n * factorial(n-1);
//     }
// }
//  let result  = factorial(5);
//  console.log(result);






// #3. Write a JavaScript function that takes two numbers as parameters and returns the larger one. 

//function greaterNum(num1, num2){
    //     if(num1 > num2){
    //         console.log(num1 + " is greater than "+ num2);
    //     }
    //     else if(num1 < num2){
    //         console.log(num2 + " is greater than " + num1)
    //     }
    //     else{
    //         console.log(num1 +" and "+num2 +" are euqual")
    //     }
    // }
    // let res = greaterNum(5,5);
    // console.log(res);







// #4. Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. 

// let str;
// let size;
// function palindrome(str){
//     size = str.length;
//     for(i=0; i<size / 2; i++){
//         if(str[i] !== str[size-1-i])
//         {
//             return "It is Not a Palindrome"
//         }
//     }
//     return "it is a Palindrome";
// }
// let res = palindrome('');
// console.log(res);





// #5. Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer.

// function isPrime(n){

//     let isPrime;
//     for(i=2; i<n; i++){
//         isPrime = true;
//         for(j=2; j/2; j++){
//             if(j%i==0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime = true){
//             console.log(i);
//         }
//     }
    
// }

// let res = isPrime(10);
// console.log(res);








// #6. Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.

// function calculator(num1, num2, op) {
//     switch(op) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num1 / num2;
//         default:
//             return "Enter valid Operator";
//     }
// }

// const result = calculator(10, 5, '+');
// console.log(result); // Output: 15




// #7. Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string. 

// function countVowel(str) { 
//     // find the count of vowels
//     const matches = str.match(/[aeiou]/gi);
//     if (matches) {
//         return matches.length;
//         // return number of vowels
//     } else {
//         return 0;
//     } 
// }

// const result = countVowel("lvdy k bll");
// console.log(result);




// #8. Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number.

// function isPerfectNumber(number) {
//     if (number <= 0) {
//         return false;
//     }

//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === number;
// }

// result = isPerfectNumber(6);
// console.log(result);




// #9. Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number.

// function generateFibonacciSeries(number) {
//     let n1 = 0, n2 = 1, nextTerm;
//     let fibonacciSeries = [];

//     for (let i = 1; i <= number; i++) {
//         fibonacciSeries.push(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }

//     return fibonacciSeries;
// }

// const number = 4;
// const fibonacciSeries = generateFibonacciSeries(number);

// console.log('Fibonacci Series:');
// console.log(fibonacciSeries.join(', '));





//10. Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10. 

function table(num){
    for(i=1; i<=10; i++){
        res = num * i;
        console.log(num+' * '+i+' = '+ res)
    }
    //return(num+' * '+i+' = '+ res);
}

let result = table(2);
console.log(res);

  
