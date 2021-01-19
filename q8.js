let limit = 5;

for(let i = 1; limit ; ++i) {
    let x = i;
    const history = [];
    while(x !== 1 && !history.includes(x)) {
        history.push(x);
        let sum = 0;


        while(x > 0){
            const digit = x%10;
            sum += digit**2;
            x = Math.floor(x/10);

        }
        x = sum;
    }
    if (x === 1) {
        console.log( i + "is a happy number");
        limit--;
    }
}