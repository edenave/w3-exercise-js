for (let ones = 0; ones < 10; ones++) {
    for (let tens = 0; tens < 10; tens++) {
        for (let hund = 1; hund < 10; hund++) {
            let i;
            let j;
            i <= 100; i = ones + 10 * tens + 100 * hund; i < 1000;
            j <= 100; j = ones * ones * ones + tens * tens * tens + hund * hund * hund; j < 1000;
            if (i === j) {
                console.log(j);
            }
        }
    }


}    