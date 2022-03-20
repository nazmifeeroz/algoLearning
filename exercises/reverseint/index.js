// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const isPositiveNumber = n === 0 || Math.sign(n) === 1;

  const reversedInt = n
    .toString()
    .split("")
    .reduce((rev, char, i) => {
      if (!isPositiveNumber && i === 0) return rev;
      return char + rev;
    }, "");

  const finalInt = parseInt(reversedInt);
  return isPositiveNumber ? finalInt : -finalInt;
}

module.exports = reverseInt;
