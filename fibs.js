function fibs(num) {
  const sequence = [0, 1];
  if (num < 2) {
    return sequence.slice(0, num);
  }

  while (num > 2) {
    const newNumber = sequence.at(-1) + sequence.at(-2);
    sequence.push(newNumber);
    num--;
  }
  return sequence;
}

console.log(fibs(-2)); // returns empty array
console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(3)); // returns [0, 1, 1]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
