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
function repeater(/*str, options*/) {
  // let targetStr = "";

  // const repeatTimes = "repeatTimes" in options ? options.repeatTimes : 1;
  // const separator = "separator" in options ? options.separator : "+";
  // const addition = "addition" in options ? options.addition : "";
  // const additionRepeatTimes =
  //   "additionRepeatTimes" in options ? options.additionRepeatTimes : 1;
  // const additionSeparator =
  //   "additionSeparator" in options ? options.additionSeparator : "|";
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  repeater,
};
