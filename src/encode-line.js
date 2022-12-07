const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return "";
  }

  let arr = str.match(/(.)\1*/g);

  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].length, arr[i].slice(0, 1));
  }
  return arr2.join().replace(/,|1/g, "");
}

module.exports = {
  encodeLine,
};
