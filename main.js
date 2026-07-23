// var firstName = 'Rana';
// console.log(firstName);

// var lastName = 'Ramy';
// var age = '17';

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Student';
// console.log(job);

// var firstName = 'Rana';
// var age = '17';
// console.log(firstName + ' ' + age);

/////////////////////////////////////////////////////////

// // Type coercion

// var job, isMarried;
// job = 'Student';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried + '.');

//////////////////////////////////////////////////////////

// // varible mutation

// age = 'seventeen';
// job = 'Driver';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried + '.');


// var now = 2026;
// var yearRana= 2009;
// var fullAge = 17;

// var isFullAge = now - yearRana >= fullAge;
// console.log(isFullAge);

/////////////////////////////////////////////////////////

// var massMark = 80;
// var heightMark = 1.7;
// var BMIMark = massMark / (heightMark * heightMark);

// var massJohn = 60;
// var heightJohn = 1.8;
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// var MarkhigherBMI = BMIMark > BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + MarkhigherBMI);

///////////////////////////////////////////////////////////

// var firstName = 'Rana';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// }
// else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var firstName = 'Rana';
// var isMarried = true;

// if (isMarried) {
//     console.log(firstName + ' is married!');
// }

// var massMark = 80;
// var heightMark = 1.7;
// var BMIMark = massMark / (heightMark * heightMark);

// var massJohn = 60;
// var heightJohn = 1.8;
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// }
// else {
//     console.log('John\'s BMI is higher than Mark\'s.');

// } // ----> this is better than the code in the next two lines
// var MarkhigherBMI = BMIMark > BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + MarkhigherBMI);

///////////////////////////////////////////////////////////////////

// var firstName = 'Rana';
// var age = 17;

// if (age < 13) {
//     console.log(firstName + ' is a girl.');
// }
// else  if ( age >= 13 && age < 20) {// between 13 and 20 
//     console.log(firstName + ' is a teenager.');
// }
// else {
//     console.log(firstName + ' is a woman.');
// }

// ----> with swich statement is the next code.

// var firstName = 'Rana';
// var age = 17;

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a girl.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young woman.');
//         break;
//     default:
//         console.log(firstName + ' is a woman.');
// }   

// Coding Challenge 2:
// let scoreJohn = (89 + 120 + 103) / 3 ;
// let scoreMike = (116 + 94 + 123) / 3 ;
// let scoreMary = (97 + 134 + 105) / 3; 

// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log ("John's team is the winner with an average score of " + scoreJohn);
// }
// else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log ("Mike's team is the winner with an average score of " + scoreMike);
// }
// else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log ("Mary's team is the winner with an average score of " + scoreMary);
// }
// else {
//     console.log ("It's a draw");
// }

/////////////////////////////////////////////////////////////////////////


// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

///////////////////////////////////////////////////

// function showInfo (user = "Un", age = "Un", rate = 0, show = "no", ...skills){
//     document.write(`<div>`);
//     document.write(`<h2>Welcome, ${user}</h2>`);
//     document.write(`<P>Age: ${age}</P>`);
//     document.write(`<p>Hour Rate: $${rate}</p>`)
//     document.write('</div>');
//     if (show === "yes"){
//         if (skills.length > 0) {
//             document.write(`<P>skills: ${skills.join(" | ")}</P>`);
//         } else {
//             document.write(`<P>skills: no skills</P>`);
//         }
//     } else {
//         document.write(`<P>skills are hidden</P>`);
//     }
// }

// showInfo("Rana", 17, 20, "yes", "HTML", "CSS");

//??????

//////////////////////////////////////////////////////////////

// function showDetails(a, b, c) {
//     let name, age, status;

//     [a, b, c].forEach(param => {
//     if (typeof param === "string") name = param;
//     else if (typeof param === "number") age = param;
//     else if (typeof param === "boolean") status = param;
//     });

//     console.log(
//     `Hello ${name}, Your Age Is ${age}, You Are ${status ? "" : "Not "}Available For Hire`
//     );
// }

// showDetails("Osama", 38, true);   // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails("Osama", 38, false);  // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// showDetails(38, "Osama", true);   // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama");   // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38);  // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

////////////////////////////////////////////////////////////////

// function addOne(num) {
//     return num + 1;
// }
// const arr = [1, 2, 3, 4, 5];
// const mappedArr = arr.map(addOne);
// console.log(mappedArr);
//console.log(arr) // Outputs the Original Array: [1, 2, 3, 4, 5]

///////////////////////////////////////////////////////////////

// function isOdd(num) {
//     return num % 2 !== 0;
// }
// const array = [1, 2, 3, 4, 5];
// const oddNums = array.filter(isOdd);
// console.log(oddNums); // Outputs [1, 3, 5];
// console.log(array);  // Outputs [1, 2, 3, 4, 5], original array is not affected

////////////////////////////////////////////////////////////////

let username;
let age;

document.getElementById("submit").onclick = function() {
    username = document.getElementById("myUser").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
    age = document.getElementById("myAge").value;
    age = Number(age);
    console.log(username,age);
}

//counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

//random number generator

const myBtn = document.getElementById("myBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;

myBtn.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max ) + min;
    randomNum2 = Math.floor(Math.random() * max ) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
}

//checked property practice

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn =document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const usResult = document.getElementById("usResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckbox.checked){
        usResult.textContent = `You understood!`;
    } else {
        usResult.textContent = `You did NOT understand`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with Master card `
    } else if (payPalBtn.checked) {
        paymentResult.textContent = `You are paying with PayPal`
    } else {
        paymentResult.textContent = `You must select a payment method`
    }
}

//Number guessing game

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum) + 1);
// console.log(answer);

// let attempts = 0;
// let guess;
// let running = true;

// while(running){

//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}` );
//     guess = Number(guess);

//     if(isNaN(guess)){
//         window.alert(`please enter a valid number`);
//     } else if (guess < minNum || guess > maxNum) {
//         window.alert(`please enter a valid number`);
//     }else{
//         attempts++;
//         if(guess < answer){
//             window.alert("TOO LOW! TRY AGAIN");
//         }
//         else if(guess > answer){
//             window.alert("TOO HIGH! TRY AGAIN");
//     } else {
//         window.alert(`CORRECT! the answer was ${answer}. it took you ${attempts} attempts`);
//             running = false;
//     }
// }
// }

////////////////////////////////////////////////////////////////

//local variable scopes

// function function1() {
//     const x = 1;
//     console.log(x);
// }

// function function2() {
//     const x = 2;
//     console.log(x);
// }

// function1();
// function2();

//temprature conversion program

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {

    if(toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 +32;
        result.textContent = temp.toFixed(1) + "°F";
    } 
    else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    } 
    else {
        result.textContent = "select a unit";
    }
}

//random password generator

// function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "123456789";
//     const symbolChars = "!@#$%^&*_+-";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowerCase ? lowercaseChars : "";
//     allowedChars += includeUpperCase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";
    
//     if (passwordLength <= 0) {  
//         return `(password length must be at least 1)`
//     }
//     if(allowedChars.length === 0) {
//         return `(At least one set of chars needs to be selected)`
//     }

//     for (let i = 0; i < passwordLength; i++) {
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex]
//     }

//     return password;
// }

// const passwordLength = 12;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength,
//                                 includeLowerCase, 
//                                 includeUpperCase, 
//                                 includeNumbers, 
//                                 includeSymbols);
                                
// console.log (`Generated password: ${password}`);

// ?????? understood it but not very well

//////////////////////////////////////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(display);

// function display(num) {
//     console.log(num);
// }

// let fruits = ["apple", "banana", "cherry", "mango"];

// fruits.forEach(capitalize);
// fruits.forEach(displayFruit);

// function lowercase(element, index, array) {
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
// }

// function displayFruit(element) {
//     console.log(element);
// }

//////////////////////////////////////////////////////////////////////////

    let numbers = [1, 2, 3, 4, 5, 6, 7];
    let evenNums = numbers.filter(isEven);
    let oddNums = numbers.filter(isOdd);
    console.log(evenNums);
    console.log(oddNums);

    function isEven(num) {
        return num % 2 === 0;
    }

    function isOdd(num) {
        return num % 2 !== 0;
    }

/////////////////////////////////////////////////////////////////////////

const person1 = {
    firstName: "Rana",
    lastName: "Ramy",
    age: 17,
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    }
};

const person2 = {
    firstName: "Ahmed",
    lastName: "Ramy",
    age: 20,
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    }
};

person1.sayHello();
person2.sayHello(); 

function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() {
        console.log(`you drive the ${this.model}`)
} 
}
const car1 = new Car("porcshe", "911", 2026, "Red");
const car2 = new Car("ferrari", "812 GTS", 2026, "Blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

///////////////////////////////////////////////////////////////////////////

class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new product("Shirt", 19.99);
const total = product1.calculateTotal(salesTax);
const product2 = new product("Pants", 29.50);
const total2 = product2.calculateTotal(salesTax);
const product3 = new product("Shoes", 100.00);
const total3 = product3.calculateTotal(salesTax);

product1.displayProduct();
console.log(`Total Price with Tax: $${total.toFixed(2)}`);
product2.displayProduct();
console.log(`Total Price with Tax: $${total2.toFixed(2)}`);
product3.displayProduct();
console.log(`Total Price with Tax: $${total3.toFixed(2)}`);

//////////////////////////////////////////////////////////////////////////////////////

class User{
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online.`);
    }

    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Rana"); 
const user2 = new User("Ahmed");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();

///////////////////////////////////////////////////////////////////////////////////////

class Animal {
    alive = true;

    eat() {
        console.log(`The ${this.name} is eating.`);
    }

    sleep() {
        console.log(`The ${this.name} is sleeping.`);
    }
}   

class Rabbit extends Animal {
    name = "Rabbit";
    alive = false;
    run() {
        console.log(`The ${this.name} is running.`);
    }
}

class Fish extends Animal {
    name = "Fish";
    swim() {
        console.log(`The ${this.name} is swimming.`);
    }
}

class Hawk extends Animal {
    name = "Hawk";
    fly() {
        console.log(`The ${this.name} is flying.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();
fish.swim();

hawk.eat();
hawk.sleep();
hawk.fly();

////////////////////////////////////////////////////////////////////////////

class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

        set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number.");
        }   
    }

        set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number.");
        }
    } 

        get width() {
        return `${this._width.toFixed(1)}cm`;
    }

        get height() {
        return `${this._height.toFixed(1)}cm`;
    }

    get area() {
        return `${(this._width * this._height).toFixed(1)}cm²`;
    }

}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

//////////////////////////////////////////////////////////////////////////////

class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string.");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empty string.");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }
}

const person = new Person("Rana", "Ramy");

console.log(person.firstName);
console.log(person.lastName);

///////////////////////////////////////////////////////////////////////////////

const fruits = [{name: "apple", color: "red", calories: 52},
                {name: "banana", color: "yellow", calories: 106},
                {name: "orange", color: "orange", calories: 47},
                {name: "grape", color: "purple", calories: 122},
                {name: "pineapple", color: "yellow", calories: 37}];


const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalorieFruits);

const highCalorieFruits = fruits.filter(fruit => fruit.calories > 100);
console.log(highCalorieFruits);

const maxCalorieFruit = fruits.reduce((max, fruit) => 
                                    fruit.calories > max.calories ? 
                                    fruit : max);
console.log(maxCalorieFruit);

const minCalorieFruit = fruits.reduce((min, fruit) => 
                                    fruit.calories < min.calories ? 
                                    fruit : min);
console.log(minCalorieFruit);