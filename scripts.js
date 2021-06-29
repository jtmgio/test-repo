// JTMG subtraction 6/27

function dif(a, b, c) {
    return a - b - c;
}

const theDif = dif(25, 10, 5);

confirm('this is subtraction')
alert(theDif); 

// MOSH Control flow exercise 1 6/28
// 1. return the larger of two numbers

//attempt 1. my code. works, but ugly?
function max(a, b){
    if(a>b) return a;
    if(b>a) return b;
}

const theMax = max(99, 100);
confirm('this is the max of two numbers');
alert (theMax);

//attempt 2. if else. works.

function max(a, b){
    if(a>b) return a;
    else return b;
}

const theMax2 = max(27, 10);
confirm('this is the max of two numbers again');
alert (theMax2); 

// Mosh's final answer. Conditional operator

function max(a, b){
    return(a>b) ? a : b;
}

const theMax3 = max(55,3);
confirm('this is the max of two numbers again again');
alert (theMax3); 

//MOSH Control flow exercise 2 6/28
// 2. Is this a landscape or a portrait?

// Attempt 1. My answer. works.
const dimensions = isLandscape(80, 190);

function isLandscape(width, height){
    if (width>height) return "Landscape";
    else return "Portrait";
}
confirm('Is this a landscape or portrait?');
alert (dimensions);

//Mosh Answer 

function LandscapeOr(width, height){
    return (width > height)
}
const whichOne = LandscapeOr(800, 200);
confirm('Is this a Landscape?')
alert (whichOne);

