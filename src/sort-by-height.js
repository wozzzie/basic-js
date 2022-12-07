const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filterArr = (arr) => {
    let filteredArr = arr
      .filter((el) => {
        if (el !== -1) {
          return el;
        }
      })
      .sort((a, b) => a - b);
    return filteredArr;
  };

  const filteredAndSortedArr = filterArr(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != -1) {
      arr[i] = filteredAndSortedArr.shift();
    }
  }

  return arr;
}

module.exports = {
  sortByHeight,
};
