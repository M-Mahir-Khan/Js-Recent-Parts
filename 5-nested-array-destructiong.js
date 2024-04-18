// nested Array destructuring

// normal code
function data(){
    return [1,[2,3],4]
}

var tmp = data();

var first = tmp[0];
var tmp2 = tmp[1];
var second = tmp2[0];
var third = tmp2[1];
var forth = tmp[2];

// destructure code

function data2(){
    return [1,[2,3],4]
}

var [
    first,
    [
        second,
        third
    ],
    forth
] = data2();
