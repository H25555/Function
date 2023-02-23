function checkPrime(number) {
    var n = 0
    for (j = 1; j <= number; j++) {
        if (number % j == 0) {
            n += 1
        }
    }
    if (n == 2) {
        console.log('Đây là số nguyên tố');
    } else {
        console.log('Đây không phải là số nguyên tố');
    }
}

checkPrime(11)