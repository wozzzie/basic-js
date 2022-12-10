const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = String(n).split("");

  let arr2 = arr.map((el) => Number(el)).reduce((accum, el) => accum + el, 0);

  arr2 = String(arr2).length > 1 ? getSumOfDigits(arr2) : arr2;

  return +arr2;
}

module.exports = {
  getSumOfDigits,
};
