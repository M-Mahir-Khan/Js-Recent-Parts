// Normal  code

function data(){
    return [1,2,3,4,5]
}

var tmp = data();
var first = tmp[0];
var second = tmp[1];
var third = tmp[2];
var other = tmp.slice(3);


// Destructure Code

function data2(){
    return [1,2,3,4,5];
}

var [
    first,
    second,
    third,
    ...other
] = data2();