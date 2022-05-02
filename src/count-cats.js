const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


  //return matrix.map(elements => elements.filter(cats => cats === '^^')).length;

  return matrix.map(elements => elements.filter(cats => cats === '^^').length).reduce((acc,el) => acc+el, 0);



  
}

module.exports = {
  countCats
};
