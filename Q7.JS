"use strict"

let i = 1
for (i; i <= 100; ++i) {

    if (i % 35 === 0) {
        console.log(i + " FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }

    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }

    else {
        console.log(i);
    }
}    