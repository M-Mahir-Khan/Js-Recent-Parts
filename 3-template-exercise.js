function upper(string,...values){
    var ret = "";
    for(let i = 0; i < string.length; i++){
        if(i > 0){
            ret += String(values[i-1]).toUpperCase();
        }
        ret += string[i]
    }

    return ret;
}


var name = "kyle",
    twitter = "getify",
    topic = "JS recent parts";

console.log(
    upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
    "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);