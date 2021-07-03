// // JTMG subtraction 6/27

// function subtractHeight(Godzilla, KingKong, Jeff) {
//     return Godzilla - KingKong - Jeff;
// }

// const HeightDif = subtractHeight(25, 10, 5);

// confirm('this is subtraction')
// alert(HeightDif); 

// // MOSH Control flow exercise 1 6/28
// // 1. return the larger of two numbers

// //attempt 1. my code. works, but ugly?
// function maximumGorillaHeight(KingKong, Harambe){
//     if(KingKong>Harambe) return KingKong;
//     if(Harambe>KingKong) return Harambe;
// }

// const theMax = maximumGorillaHeight(99, 10);
// confirm('this is the max of two Gorilla Heights');
// alert (theMax);

// //attempt 2. if else. works.

// function maximumLizardHeight(Godzilla, Lizzy){
//     if(Godzilla>Lizzy) return Godzilla;
//     else return Lizzy;
// }

// const maxOfTwoLizards = maximumLizardHeight(27, 10);
// confirm('this is the max of two Lizard Heights');
// alert (maxOfTwoLizards); 

// // Mosh's final answer. Conditional operator

// function max(a, b){
//     return(a>b) ? a : b;
// }

// const number = max(55,3);
// confirm('this is the max of two numbers again again');
// alert (number); 

// //MOSH Control flow exercise 2 6/28
// // 2. Is this a landscape or a portrait?

// // Attempt 1. My answer. works.
// const dimensions = landscapeTrueFalse(80, 190);

// function landscapeTrueFalse(width, height){
//     if (width>height) return "Landscape";
//     else return "Portrait";
// }
// confirm('Is this a landscape or portrait?');
// alert (dimensions);

// //Mosh Answer 

// function isLandscape(width, height){
//     return (width > height)
// }
// const photograph = isLandscape(800, 200);
// confirm('Is this a Landscape?')
// alert (photograph);

// // Mosh exercise Control Flow 3

// // divisible by 3 => Fizz
// // divisible by 5 => Buzz
// // divisible by 3 and 5 => FizzBuzz
// // not divisible by 3 or 5 => input
// // not a number => 'Not a Number'


//my answer. looked up help on 'typeof'
const output = fizzBuzz (9);
console.log(output);

function fizzBuzz(input) {

if (typeof input !== 'number')
return 'Not a number';

else if (input % 3 ===0 && input % 5===0)
return 'fizzBuzz';

else if (input % 3 === 0)
return 'fizz';

else if (input % 5 === 0)
return 'Buzz';

else if (input % 3 !==0)
return input;
}

// Mosh answer
//const output = fizzBuzz (15);
// console.log(output);

// function fizzBuzz(input) {

// if (typeof input !== 'number')
// return NaN;

// if (input % 3 ===0 && input % 5===0)
// return 'fizzBuzz';

// if (input % 3 === 0)
// return 'fizz';

// if (input % 5 === 0)
// return 'Buzz';

// return input;
// }


//Mosh Control Flow Exercise 4

// Speed Limit = 70
// 5 -> 1 point
//math.floor(1.3)
//12 points -> suspended

checkSpeed(50);

function checkSpeed(speed){


}
