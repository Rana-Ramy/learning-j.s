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
//         document.write(`<P>skills is hidden</P>`);
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
    count= 0;
    countLabel.textContent = count;
}
