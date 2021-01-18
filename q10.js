"use strict"

let i;
let j;
let b;
for (i = 1; i <= 6; i++) {
    for (j = 1; j < i; j++) {
        b = b + ("*");
    }
    console.log(b);
    b = "";
}

