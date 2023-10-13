const numbers = [2, 5, 9, 6, 48, 67];
let even = numbers.filter((temp) => {
  return temp % 2 !== 0;
});
console.log(even);
let sum = even.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0);
console.log(sum);
let avg = sum / even.length;
console.log(avg);
