// Find and findIndex

var arr = [{a:1},{a:2}];

let a = arr.find(function match(value){
    return value && value.a > 1
})

let b = arr.find(function match(value){
    return value && value.a > 10
})

console.log(a);
console.log(b);


// indexOf

let arr2 = [1,2,4.6,3,NaN,8,9];

console.log(arr2.indexOf(NaN)); // -1 because NaN is not equal to it self
console.log(arr2.indexOf(10));  // -1
console.log(arr2.indexOf(6));   //  3
console.log(~arr2.indexOf(1));  //  -1
console.log(~arr2.indexOf(2));  //  -2
console.log(~arr2.indexOf(8));  //  -7


// include

let arr3 = [1,2,3,4,5,NaN,"mahir",[],{}];

console.log(arr3.includes(1));  // true
console.log(arr3.includes(2));  // true
console.log(arr3.includes(6));  // false
console.log(arr3.includes(4));  // true
console.log(arr3.includes(NaN));  // true
console.log(arr3.includes("mahir"));  // true
console.log(arr3.includes("Mahir"));  // false
console.log(arr3.includes([]));  // false
console.log(arr3.includes({}));  // false




