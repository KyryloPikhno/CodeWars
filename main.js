const isFizz = (n) => {
    return n % 3 === 0;
};

const isBuzz = (n) => {
    return n % 5 === 0;
};

const isFizzBuzz = (n) => {
    return n % 3 === 0 && n % 5 === 0;
};

for (let i = 1; i <100; i++) {
    switch (true) {
        case isFizzBuzz(i):
            console.log('FizzBuzz');
            break;
        case isFizz(i):
            console.log('Fizz');
            break;
        case isBuzz(i):
            console.log('Buzz');
            break;
        default:
            console.log(i);
    }
}

