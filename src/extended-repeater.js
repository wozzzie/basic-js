const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let targetStr = "";

  const repeatTimes = "repeatTimes" in options ? options.repeatTimes : 1;
  const separator = "separator" in options ? options.separator : "+";
  const addition = "addition" in options ? options.addition : "";
  const additionRepeatTimes =
    "additionRepeatTimes" in options ? options.additionRepeatTimes : 1;
  const additionSeparator =
    "additionSeparator" in options ? options.additionSeparator : "|";

  const arr = [];
  arr.push(
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  );

  for (let a = 0; a < arr[0]; a++) {
    targetStr = targetStr + str;
    const repeatLength = arr[0] - 1;
    const additionLength = arr[3] - 1;

    for (let b = 0; b < arr[3]; b++) {
      if (b < additionLength) {
        targetStr = targetStr + arr[2] + arr[4];
      } else {
        targetStr = targetStr + arr[2];
      }
    }
    a < repeatLength ? (targetStr += arr[1]) : (targetStr += "");
  }

  return targetStr;
}

module.exports = {
  repeater,
};
