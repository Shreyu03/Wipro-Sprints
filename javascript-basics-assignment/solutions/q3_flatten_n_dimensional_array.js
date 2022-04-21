/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	// Write your code here
	let num=Infinity;
	return Array.isArray(arr)? number>0 ?
	arr.reduce((actual,val)=>actual.concat(Array.isArray(val)?
	flatten(val,number-1):val),[])
	:arr.slice():null;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
