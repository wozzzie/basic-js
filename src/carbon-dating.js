const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const period = 0.693 / HALF_LIFE_PERIOD;

  if (
    typeof sampleActivity !== "string" ||
    /^[0-9.,]+$/.test(sampleActivity) === false ||
    !sampleActivity ||
    +sampleActivity < 1 ||
    +sampleActivity > MODERN_ACTIVITY
  ) {
    return false;
  }

  const calcAge = () =>
    Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / period);

  let calculatedAge = calcAge();

  return calculatedAge;
}

module.exports = {
  dateSample,
};
