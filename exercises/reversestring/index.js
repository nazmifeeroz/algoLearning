// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

reverse("abc");

module.exports = reverse;

// # Solution 1
// function reverse(str) {
//   let reversed = "";
//   for (char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// # Solution 2
// function reverse(str) {
//   return str.split("").reverse().join("");
// }
