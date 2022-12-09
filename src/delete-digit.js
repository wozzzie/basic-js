const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrOfNumbers = Array.from(String(n)).map((num) => Number(num));
  let maxValue = 0;

  arrOfNumbers.forEach((_, i) => {
    let slicedArr = [...arrOfNumbers];
    slicedArr.splice(i, 1);
    let number = Number(slicedArr.join(""));

    if (number < maxValue) {
      maxValue = maxValue;
    } else {
      maxValue = number;
    }
  });

  return maxValue;
}

module.exports = {
  deleteDigit,
};
