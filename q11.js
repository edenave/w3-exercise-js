let number1 = Number(prompt("enter the first number"));
let number2 = Number(prompt("enter the second number"));
let gcd = number1 < number2 ? number1 : number2;
let divisor = 1;
for (let i = 1; i < gcd; i++) {
    if (number1 % i === 0 && number2 % i === 0) {
        devisor = i;
    }
}
alert(devisor);