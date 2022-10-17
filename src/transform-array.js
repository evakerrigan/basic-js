const { NotImplementedError } = require('../extensions/index.js');

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

  let transformArray;

if (!arr.isArray) {

  return "'arr' parameter must be an instance of the Array!";

} else {  

  for (i = 0; i < arr.length; i++) {

    if (arr[i].value === '--discard-next') {
      transformArray = arr.splice(arr[i]);
      transformArray = transformArray.splice(transformArray[i+1]);
      return transformArray;
    }
    if (arr[i].value === '--discard-prev') {
      transformArray = arr.splice(arr[i]);
      transformArray = transformArray.splice(transformArray[i-1]);
      return transformArray;      
    }
    if (arr[i].value === '--double-next') {
      transformArray = arr.splice(arr[i]);
      transformArray = transformArray.splice(transformArray[i+1]);
      return transformArray;      
    }
    if (arr[i].value === '--double-prev') {
      transformArray = arr.splice(arr[i]);
      transformArray = transformArray.splice(transformArray[i+1]);
      return transformArray;      
    }





  }
















}

  
}

module.exports = {
  transform
};
