// Object Destructiong 


// normal code
function data(){
    return {a:1, b:2, c:3}
};

var tmp = data();

var first = tmp.a;
var second = tmp.b;
var third = tmp.c;

// destructring code 

function data2(){
    return {a:1, b:2, c:3};
}

var {
    a:first,
    b:second,
    c:third
} = data2()

