const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result = '';
  const obj = str.split('').reduce((acc, el) => {
      if (acc[el]){
          acc[el] ++
      } else {
          acc[el] = 1
      }
      return acc
  }, {})
  for (key in obj) {

      result += obj[key] + key
  }
  return result

}

module.exports = {
  encodeLine
};
