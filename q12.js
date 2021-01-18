let y = 0;
let x;
for (x = 0; x < 1000; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
        y += x;
    }
}
console.log(y);