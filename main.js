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
let scoreJohn = (89 + 120 + 103) / 3 ;
let scoreMike = (116 + 94 + 123) / 3 ;
let scoreMary = (97 + 134 + 105) / 3; 

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log ("John's team is the winner with an average score of " + scoreJohn);
}
else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log ("Mike's team is the winner with an average score of " + scoreMike);
}
else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log ("Mary's team is the winner with an average score of " + scoreMary);
}
else {
    console.log ("It's a draw");
}

/////////////////////////////////////////////////////////////////////////

