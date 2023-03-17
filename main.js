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