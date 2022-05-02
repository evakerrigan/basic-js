const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  const result = [];
  const cases = [...s1];
  let str = s2;
  
  for (const letter of cases) {
    if (str.includes(letter)) {
      result.push(letter);
      str = str.replace(letter, '');
    }
  }
  
  return result.length;
  
}

module.exports = {
  getCommonCharacterCount
};
