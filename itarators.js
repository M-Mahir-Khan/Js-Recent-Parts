// itarators

var str = "Hello";
var arr = ["w","o","r","l","d"];

var itr1 = str[Symbol.iterator]();
var itr2 = str[Symbol.iterator]();

console.log(itr1.next);
console.log(itr1.next);
console.log(itr1.next);
console.log(itr1.next);
console.log(itr1.next);
console.log(itr1.next);

console.log(itr2.next);
console.log(itr2.next);
console.log(itr2.next);
console.log(itr2.next);
console.log(itr2.next);
console.log(itr2.next);
