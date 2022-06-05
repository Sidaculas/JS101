let laptopPrice = 8000;
let currentMoney = 10000;

if (currentMoney >= laptopPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else{
    //Condition was false. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}



// Ternary expression

let firstNumber = 10;
let secondNumber = 20;

let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
console.log(biggestNumber);