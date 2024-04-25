// generator

function* numGenerator(){
    let i = 0;
    let arr = []

    while(true){
        yield i++;
        arr.push(i)
        // return arr
    }
}

let num = numGenerator()

console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);

// console.log(num)