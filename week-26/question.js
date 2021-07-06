/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.




For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

<<<<<<< HEAD


/* things I know

1Q                  2Q              3Q              4Q
1   2    3      4   5    6      7    8     9      10    11   12

4 quarters in 1 year

if argument is 8 is Q3 returns 3

if argument is argument is 12 function returns 4


*/
const inQuarterOfYear = (month) => {
    // Your code here
if (month <= 3) return 1;
if (month > 3 && month < 7) return 2;
if (month > 6 && month < 10) return 3;
if (month > 9 && month <= 13) return 4;

=======
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
>>>>>>> main
}

// inQuarterOfYear (-5);
// inQuarterOfYear (null);
// inQuarterOfYear ('string');
// inQuarterOfYear (undefined);



// inQuarterOfYear(-5);
// inQuarterOfYear(null);
// inQuarterOfYear('five');
// inQuarterOfYear(undefined);


<<<<<<< HEAD
if (inQuarterOfYear(11) === 4) {
    alert('CORRECT')
} else alert('IN CORRECT!!!!')
=======

//tests 
setTimeout(() => {
    if (inQuarterOfYear(-23) === 1) {
        console.log('if month 3 is in 1q CORRECT')
    } else console.log('IN CORRECT!!!!')

}, 2000);

setTimeout(() => {
    if (inQuarterOfYear('five') === 3) {
        console.log('if month 8 is in 3q CORRECT')
    } else console.log('IN CORRECT!!!!')
}, 2000);

setTimeout(() => {
    if (inQuarterOfYear(null) === 4) {
        console.log('if month 11 in 4q CORRECT')
    } else console.log('IN CORRECT!!!!')
}, 2000)
>>>>>>> main
