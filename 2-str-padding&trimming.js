// padStart

var str = "Hello";

str.padStart(5);            // "Hello"

str.padStart(8);            // "   Hello"

str.padStart(8,"*");        // "***Hello"

str.padStart(8,"12345");    // "123Hello"

str.padStart(8,"ab");       // "abaHello"


// padEnd 

var str2 = "Hello";

str2.padEnd(5);             // "Hello"

str2.padEnd(8);             // "Hello   "

str2.padEnd(8, "*");        // "Hello***"

str2.padEnd(8, "12345");    // "Hello123"

str2.padEnd(8, "ab");       // "Helloaba"


// Trimming 

var str3 = "    some stuff      ";

str3.trim();                // "some stuff"

str3.trimStart();           // "some stuff      "

str3.trimEnd();             // "    some stuff"

