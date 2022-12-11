const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let discardNext = "--discard-next";
  let discardPrev = "--discard-prev";
  let doubleNext = "--double-next";
  let doublePrev = "--double-prev";

  let transformed = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const nextElement = arr[i + 1];
    const prevElement = arr[i - 1];

    if (element === discardNext) {
      arr.splice(i, 2);
    } else if (element && element === discardPrev) {
      transformed.pop();
    } else if (element === doubleNext) {
      nextElement && transformed.push(nextElement);
    } else if (element === doublePrev) {
      prevElement && transformed.push(prevElement);
    } else {
      transformed.push(element);
    }
  }
  return transformed;
}

module.exports = {
  transform,
};
