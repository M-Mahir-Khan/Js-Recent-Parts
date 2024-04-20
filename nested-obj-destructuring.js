// Nested Object Destructuring

// normal code 
function data(){
    return {
        a:1,
        b: {
            c:3,
            d:4
        }
    };
};

var tmp = data();

var a = tmp.a;
var b = tmp.b
var c = b.c;
var d = b.d;

// destructuring code

function data2(){
    return {
        a:1,
        b: {
            c:3,
            d:4
        }
    };
};

var {
    a,
    b: {
        c,
        d
    }
} = data2();