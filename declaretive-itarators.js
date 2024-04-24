// Declarative Itrators

var str = "Hello";
var it = str[Symbol.iterator]();

for(let v of it){
    console.log(v);
}
// "H" "e" "l" "l" "o"

for(let v of str){
    console.log(v);
}
// "H" "e" "l" "l" "o"


var str2 = "Hello";

var letters = [...str2];
console.log(letters);
// ["H","e","l","l","o"]