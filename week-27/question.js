/*

Complete the solution so that it reverses all of the words within the string passed in.

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


concepts to learn

	string methods
	array methods 

	string to array 
	array to string 

const arr = ["foo", "bar","test"];
//arr[0] == foo
//arr[1] == bar
//arr[2] == test
*/

// 'abcdef'.charAt(3)

let str = "The greatest victory is that which requires no battle.";
const myArr = str.split(" ");
myArr.reverse();
console.log(myArr);






// function reverseWords(str) {
//     return str; // reverse those words
// }