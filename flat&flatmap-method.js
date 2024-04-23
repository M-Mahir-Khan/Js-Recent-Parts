// Flat method

var  nestedvalues = [1, [2,3], [[]], [4,[5]], 6];

console.log(nestedvalues.flat(0));
// [1, [2,3], [[]], [4,[5]], 6];

console.log(nestedvalues.flat());   
// [1,2,3,[],4,[5],6];

console.log(nestedvalues.flat(2));
//  [1, 2, 3, 4, 5, 6]

// ......................................
// flatmap method

let arr = [1,2,3,4];

let a = arr.map((value)=>{
    return [value *2, String(value * 2)]
})

let b = arr.map((value)=>{
    return [value * 2, String(value *2)]
}).flat();

let c = arr.flatMap(()=>{
    return [value * 2, String(value *2)]
})


console.log(a);
console.log(b);
console.log(c);