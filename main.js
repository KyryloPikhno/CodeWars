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

// const removeChar = (str) => str.split('').slice(1, str.length - 1).join('');
//
// console.log(removeChar('test'));


// const updateLight = current => {
//     if (current === 'green') {
//         return 'yellow';
//     } else if (current === 'yellow') {
//         return 'red';
//     } else if (current === 'red') {
//         return 'green';
//     }
// };
//
// console.log(updateLight('yellow'));


// const invert = array => array.map(number => number > 0 ? -number : (number * -1));
//
// console.log(invert([1, 2, 3, 4, -6]));


// const DNAtoRNA = dna => dna.split('').map(l => l === 'T' ? l = 'U' : l).join('');
//
// console.log(DNAtoRNA('GCTT'));


// const removeEveryOther = arr => arr.filter((item ,i)=>!(i%2))
//
// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));


// const reverseSeq = n => {
//     const arr = [];
//     for (let i = n; n > arr.length; i--) {
//          arr.push(i);
//     }
//
//     return arr;
// };
//
// console.log(reverseSeq(10));


// const array = n => {
//     const arr = [];
//     for (let i = 1; i <= n; i++) {
//         arr.push(i);
//     }
//
//     return arr;
// };
//
// console.log(array(10));

// const solution = (str, end) => {
//     if (end === '') {
//         return false;
//     }
//
//     return str.slice(-end.length) === end;
// };
//
//
//
// console.log(solution('abs',''));

// const love = (flower1, flower2) => (flower2 + flower1) % 2 !== 0;
//
// console.log(love(201, 200));


// function paperwork(n, m) {
//     if (m < 0 || n < 0) {
//         return 0
//     }
//     return n * m
// }


// const rowSumOddNumbers = n => n * n * n;

// const makeUpperCase = str => str.toUpperCase();

// const minMax = arr => {
//     const min = arr.reduce((acc, number) => acc < number ? acc : number);
//     const max = arr.reduce((acc, number) => acc > number ? acc : number);
//
//     return [min, max];
// };
//
// console.log(minMax([2020202020, 20]));

// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
// }


// const cockroachSpeed = s => Math.floor(s / 0.036);
//
// console.log(cockroachSpeed(1.08));

// const removeSmallest = (numbers) => {
//     if(numbers.length === 0) return [];
//     let newArr = numbers;
//     const min = newArr.reduce((acc, item) => acc < item ? acc : item);
//     const index = newArr.indexOf(min);
//     numbers.splice(index, 1);
//     return newArr;
// };
//
// console.log(removeSmallest([1,3,3]));

// const removeSmallest = (numbers) => {
//     const copy = numbers.slice(0);
//     copy.splice(numbers.indexOf(Math.min(...numbers)), 1);
//     return copy;
// };
//
// console.log(removeSmallest([1,3,3]));
















































