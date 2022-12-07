const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const prototype = Object.prototype.toString.call(date);

  if (!date) {
    return "Unable to determine the time of year!";
  } else if (prototype !== "[object Date]" || Object.keys(date).length !== 0) {
    throw new Error("Invalid date!");
  }

  let seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  };
  let arr = Object.entries(seasons);
  for (let el of arr) {
    if (el[1].includes(date.getMonth())) {
      return el[0];
    }
  }
}

module.exports = {
  getSeason,
};
