// const sum = (numbers) => {
//     if(numbers.length === 0) return 0;
//
//     return numbers.reduce((acc, number) => acc + number, 0);
// };
//
// console.log(sum([]));

// const stringToNumber = str => Number(str);
//
// console.log(stringToNumber('23'));

// const highAndLow = numbers => {
//     const res = numbers.split(' ').map(n => Number(n));
//     let max = res.reduce((sum, current) => sum < current ? current : sum);
//     let min = res.reduce((sum, current) => sum > current ? current : sum);
//     return `${max} ${min}`;
// };
//
// console.log(highAndLow('23 -20 6 3'));

// const getSum = (a, b) => {
//     return (Math.abs(a - b) + 1) * (a + b) / 2;
// };
//
// console.log(getSum(576, 251));

// const findAverage = array => array.length === 0 ? 0 : array.reduce((acc, n) => acc + n, 0) /array.length;

// const digitize = n => n.toString().split('').reverse().map(n => Number(n));
//
// console.log(digitize(0));