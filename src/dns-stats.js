const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let targetObj = {};

  domains.forEach((el) => {
    let str = "";
    let mutatedString = el.split(".").reverse();

    for (let item of mutatedString) {
      str = str + '.' + item;
      
      if (str in targetObj) {
        targetObj[str] += 1;
      } else {
        targetObj[str] = 1;
      }
    }
  });
  return targetObj;
}

module.exports = {
  getDNSStats,
};
