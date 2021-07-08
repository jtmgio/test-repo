/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/



/* things I know

    1Q               2Q                 3Q                4Q
1   2    3       4   5    6        7    8     9       10    11   12

4 quarters in 1 year

if argument is 8 is Q3 returns 3

if argument is argument is 12 function returns 4


*/
// const inQuarterOfYear = (month) => {
//     // Your code here
//     //if (month is undefined, null, NaN, 'string') throw "Mistake!"
//     //if month >13 and <1) throw  "error"
// if (month <= 3) return 1;
// if (month > 3 && month < 7) return 2;
// if (month > 6 && month < 10) return 3;
// if (month > 9 && month <= 13) return 4;



// inQuarterOfYear (-5);
// inQuarterOfYear (null);
// inQuarterOfYear ('string');
// inQuarterOfYear (undefined);


//tests 
// if (inQuarterOfYear(3) === 1) {
//     alert('CORRECT')
// } else alert('IN CORRECT!!!!')

// if (inQuarterOfYear(8) === 3) {
//     alert('CORRECT')
// } else alert('IN CORRECT!!!!')


// if (inQuarterOfYear(11) === 4) {
//     alert('CORRECT')
// } else alert('IN CORRECT!!!!')

/*
things I know 
    1Q           2Q          3Q            4Q
-  1 2 3   |   4 5 6   |   7 8 9    |    10 11 12

- 4 quarters in a 1 year 

if argument is 8 is Q3 function returns 3

if argument is 12 function returns 4

*/

//month == 8


const inQuarterOfYear = (month) => {
    // Your code here
    if (month <= 3) return 1;
    if (month > 3 && month < 7) return 2;
    if (month > 6 && month < 10) return 3;
    if (month > 9 && month <= 12) return 4;
    if (month < 0) return 5;
    if (typeof month !== 'number') return 6;
    if (typeof month === undefined) return 7;
        
}

// inQuarterOfYear (-5);
// inQuarterOfYear (null);
// inQuarterOfYear ('string');
// inQuarterOfYear (undefined);

//tests 
setTimeout(() => {
    if (inQuarterOfYear(2) === 1) {
        console.log('CORRECT')
    } else console.log('IN CORRECT!!!!')

}, 2000);

setTimeout(() => {
    if (inQuarterOfYear(4) === 2) {
        console.log('CORRECT')
    } else console.log('IN CORRECT!!!!')

}, 2000);


setTimeout(() => {
    if (inQuarterOfYear(8) === 3) {
        console.log('CORRECT')
    } else console.log('IN CORRECT!!!!')
}, 2000);

setTimeout(() => {
    if (inQuarterOfYear(11) === 4) {
        console.log('CORRECT')
    } else console.log('IN CORRECT!!!!')
}, 2000);

setTimeout(() => {
    if (inQuarterOfYear(-3) === 5) {
        console.log('CORRECT')
    } else console.log('IN CORRECT!!!!')
}, 2000);


setTimeout(() => {
    if (inQuarterOfYear("five") === 6) {
        console.log('Must be a number')
    } 
}, 2000);
    

setTimeout(() => {
    if (inQuarterOfYear('dsfk') === 7) {
        console.log('Undefined')
    } 
}, 2000);