// function fibs(num) {
//   const sequence = [0, 1];
//   if (num < 2) {
//     return sequence.slice(0, num);
//   }

//   while (num > 2) {
//     const newNumber = sequence.at(-1) + sequence.at(-2);
//     sequence.push(newNumber);
//     num--;
//   }
//   return sequence;
// }

function fibsRec(num, sequence = [0, 1]) {
  if (sequence.length >= num) {
    return sequence.slice(0, num);
  }
  const newNumber = sequence.at(-1) + sequence.at(-2);
  sequence.push(newNumber);
  return fibsRec(num, sequence);
}

console.log(fibsRec(-2)); // returns empty array
console.log(fibsRec(1)); // returns [0]
console.log(fibsRec(2)); // returns [0, 1]
console.log(fibsRec(3)); // returns [0, 1, 1]
console.log(fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
